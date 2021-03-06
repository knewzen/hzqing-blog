package hzqing.com.blogadmin.service.blog;

import hzqing.com.blogadmin.entity.blog.Visit;
import hzqing.com.hzqingcommon.service.IBaseService;


public interface IVisitService extends IBaseService<Visit>{

    int getVisitNum();

    int getVisitNumByAId(String id);

    int getSupportNumByAId(String id);
}
