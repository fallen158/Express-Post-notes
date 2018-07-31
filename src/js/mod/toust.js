import $ from "jquery";
class toast {
  constructor(msg, time) {
    this.msg = msg;
    this.dismissTime = time || 3000;
    this.createToast();
    this.showToast();
  }
  createToast() {
    var tpl = '<div class="toast">' + this.msg + "</div>";
    this.$toast = $(tpl);
    $("body").append(this.$toast);
  }
  showToast() {
    this.$toast.fadeIn(300, () => {
      setTimeout(() => {
        this.$toast.fadeOut(300, () => {
          this.$toast.remove();
        });
      }, this.dismissTime);
    });
  }
}

function Toast(msg, time) {
  return new toast(msg, time);
}

export default Toast;
