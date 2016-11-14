/**
 * Created by zeze on 2016/11/14.
 */
const storage_key = "todos-vuejs";
export default{
  fetch(){
    return JSON.parse(window.localStorage.getItem(storage_key || "[]"))
  },
  save(item){
    window.localStorage.setItem(storage_key,JSON.stringify(item))
  }
}
