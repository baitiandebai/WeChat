package com.kiunlx.dao.base;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class BaseDaoImpl<T,K> {

	@Autowired
	protected JdbcTemplate jt;
	
	@Autowired
	protected EntityManager em;
	
	private Class<T> clazz;
	
	//	从类的泛型中获得集成该类的子类的POJO对象放入到clazz中
	@SuppressWarnings("unchecked")
	public BaseDaoImpl() {
		this.clazz = null;
		@SuppressWarnings("rawtypes")
		Class c = getClass();
		Type type = c.getGenericSuperclass();
		if (type instanceof ParameterizedType) {
			Type[] parameterizedType = ((ParameterizedType) type).getActualTypeArguments();
			this.clazz = (Class<T>) parameterizedType[0];
		}
	}
	
	/* (non-Javadoc)
	 * @see com.kiunlx.dao.base.BaseDao#get(java.lang.String, java.lang.String)
	 */
	@SuppressWarnings("unchecked")
	public T get(String columnName, String value) {
		
		
		StringBuffer sb = new StringBuffer();
		sb.append("from " + clazz.getName() + " as model ");
		sb.append("where model." + columnName + "= :value");
		try {
			Query query = em.createQuery(sb.toString());
			query.setParameter("value", value);
			List<T> tlist = query.getResultList();
			if (tlist != null && tlist.size() > 0)
				return tlist.get(0);
			else
				return null;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/* (non-Javadoc)
	 * @see com.kiunlx.dao.base.BaseDao#insert(T)
	 */
	public void insert(T t) {
		em.persist(t);
	}
	
	/* (non-Javadoc)
	 * @see com.kiunlx.dao.base.BaseDao#update(T)
	 */
	public void update(T t) {
		try {
			em.merge(t);
			em.flush();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/* (non-Javadoc)
	 * @see com.kiunlx.dao.base.BaseDao#get(java.lang.String)
	 */
	public T get(K id) {
		T t;
		try {
			t = em.find(clazz, id);
			return t;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/* (non-Javadoc)
	 * @see com.kiunlx.dao.base.BaseDao#delete(T)
	 */
	public void delete(T t){
		
		try {
			em.remove(t);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
