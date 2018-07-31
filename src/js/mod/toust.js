import $ from "jquery";



console.log($('#app').text())

class toast{
    constructor(msg,time){
        this.msg = time
        this.dismissTime = time || 1000
    }
    createToast(){
        let tpl = '<div class="toast">'+this.msg+'</div>'
        this.$toast = $(tpl)
        $('body').append(this.$toast)
    }
    showToast(){
        
    }
}

