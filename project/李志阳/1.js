/**
 * @param class类名：顶部导航栏
 * @param {*} parent 父级盒子
 * @param  {...any} <Array> :导航栏标题名称
 */
class topnav {
    constructor(parent, ...arr) {
        this.width = 80;
        this.height = 5;
        this.div = this.creatediv(parent, ...arr);
    }
    creatediv(parent, ...arr) {
        if (this.div) return this.div;
        var allW = parent.clientWidth
        let x = []
        x.push(...arr)
        for (var i = 0; i < x[0].length; i++) {
            var div = document.createElement("div");
            Object.assign(div.style, {
                width: (allW / x[0].length) + "px",
                height: this.height + "vh",
                border: "1px solid black",
                display: "inline-block",
                textAlign: "center",
                lineHeight: this.height + "vh"
            });
            div.innerText = x[0][i]
            parent.appendChild(div);
        }
        div.self = this
        div.addEventListener("resize", this.rediv)
        div.addEventListener("mouseover", this.movdiv)
        div.addEventListener("mouseout", this.movdiv)
        div.addEventListener("click", this.movdiv)
    }
    rediv() {
        this.creatediv()
    }

    movdiv(e) {
        if (e.target.constructor === HTMLUListElement) return;
        if (e.type == "mouseover") {
            e.target.style.backgroundColor = "red";
            e.target.style.color = "white"
        } else if (e.type == "mouseout") {
            e.target.style.backgroundColor = "white"
            e.target.style.color = "black"
        } else if (e.type == "click") {
            alert("123")
        }
    }
}

