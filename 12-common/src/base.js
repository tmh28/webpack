/**
 * Created by wuxueyong on 17/8/1.
 */
module.exports={
    init(title){
        var div=document.createElement('div');
        div.innerText=title;
        document.body.appendChild(div)
    }
}
