/**
 * Created by jerry on 2017/11/13.
 * 图书相关api
 */
import * as API from './' //引入所有的外侧的js文件内容


export default {
  //查询获取book列表(通过page分页)
  findList: params => {
    return API.GETMY('getAll', params);
  },
  //查询获取一条book信息
  findById:id => {
    return API.GETMY("checkById",id);
  },
  add: params => {
    return API.POSTMY("Insert", params)
  },
  update: (id, params) => {
    return API.PUTMY("Update",params)
  },
  remove: id => {
    return API.DELETE_POST_MY("Delete",id)
  },
  //批量删除，传ids数组
  removeBatch: (ids) => {
    return API.DELETE(`/api/v1/books/batch/${ids}`)
  }

}
