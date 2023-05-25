function percent() {
    try {
      rmf.showRightMenu(!1), $(".rmMask").attr("style", "display: none");
    } catch (e) {}
    let e = document.documentElement.scrollTop,
      t =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        ) - document.documentElement.clientHeight,
      n = Math.round((e / t) * 100),
      o = document.querySelector("#go-up");
    n < 95
      ? ((o.childNodes[0].style.display = "none"),
        (o.childNodes[1].style.display = "block"),
        (o.childNodes[1].innerHTML = n + "<span>%</span>"))
      : ((o.childNodes[1].style.display = "none"),
        (o.childNodes[0].style.display = "block"));
  }
  function tonav() {
    document
      .getElementById("name-container")
      .setAttribute("style", "display:none");
    var e = $(window).scrollTop();
    $(window).scroll(function () {
      var t = $(window).scrollTop();
      t > e
        ? (document.getElementById("name-container").setAttribute("style", ""),
          document
            .getElementsByClassName("menus_items")[1]
            .setAttribute("style", "display:none!important"))
        : (document
            .getElementsByClassName("menus_items")[1]
            .setAttribute("style", ""),
          document
            .getElementById("name-container")
            .setAttribute("style", "display:none")),
        (e = t);
    }),
      (document.getElementById("page-name").innerText =
        document.title.split(" | Fomalhaut🥝")[0]);
  }
  function scrollToTop() {
    document.getElementsByClassName("menus_items")[1].setAttribute("style", ""),
      document
        .getElementById("name-container")
        .setAttribute("style", "display:none"),
      btf.scrollToDest(0, 500);
  }
  function getDistance(e, t, n, o) {
    const { sin: a, cos: s, asin: c, PI: r, hypot: i } = Math;
    let l = (e, t) => (
        (e *= r / 180), { x: s((t *= r / 180)) * s(e), y: s(t) * a(e), z: a(t) }
      ),
      d = l(e, t),
      b = l(n, o),
      u = 2 * c(i(d.x - b.x, d.y - b.y, d.z - b.z) / 2) * 6371;
    return Math.round(u);
  }
  function showWelcome() {
    let e,
      t,
      n,
      o = getDistance(
        113.34499552,
        23.15537143,
        ipLoacation.result.location.lng,
        ipLoacation.result.location.lat
      ),
      a = ipLoacation.result.ad_info.nation;
    switch (ipLoacation.result.ad_info.nation) {
      case "日本":
        t = "よろしく，一起去看樱花吗";
        break;
      case "美国":
        t = "Let us live in peace!";
        break;
      case "英国":
        t = "想同你一起夜乘伦敦眼";
        break;
      case "俄罗斯":
        t = "干了这瓶伏特加！";
        break;
      case "法国":
        t = "C'est La Vie";
        break;
      case "德国":
        t = "Die Zeit verging im Fluge.";
        break;
      case "澳大利亚":
        t = "一起去大堡礁吧！";
        break;
      case "加拿大":
        t = "拾起一片枫叶赠予你";
        break;
      case "中国":
        switch (
          ((a =
            ipLoacation.result.ad_info.province +
            " " +
            ipLoacation.result.ad_info.city +
            " " +
            ipLoacation.result.ad_info.district),
          (e = ipLoacation.result.ip),
          ipLoacation.result.ad_info.province)
        ) {
          case "北京市":
            t = "北——京——欢迎你~~~";
            break;
          case "天津市":
            t = "讲段相声吧。";
            break;
          case "河北省":
            t = "山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";
            break;
          case "山西省":
            t = "展开坐具长三尺，已占山河五百余。";
            break;
          case "内蒙古自治区":
            t = "天苍苍，野茫茫，风吹草低见牛羊。";
            break;
          case "辽宁省":
            t = "我想吃烤鸡架！";
            break;
          case "吉林省":
            t = "状元阁就是东北烧烤之王。";
            break;
          case "黑龙江省":
            t = "很喜欢哈尔滨大剧院。";
            break;
          case "上海市":
            t = "众所周知，中国只有两个城市。";
            break;
          case "江苏省":
            switch (ipLoacation.result.ad_info.city) {
              case "南京市":
                t = "这是我挺想去的城市啦。";
                break;
              case "苏州市":
                t = "上有天堂，下有苏杭。";
                break;
              default:
                t = "散装是必须要散装的。";
            }
            break;
          case "浙江省":
            t = "东风渐绿西湖柳，雁已还人未南归。";
            break;
          case "河南省":
            switch (ipLoacation.result.ad_info.city) {
              case "郑州市":
                t = "豫州之域，天地之中。";
                break;
              case "南阳市":
                t = "臣本布衣，躬耕于南阳。此南阳非彼南阳！";
                break;
              case "驻马店市":
                t = "峰峰有奇石，石石挟仙气。嵖岈山的花很美哦！";
                break;
              case "开封市":
                t = "刚正不阿包青天。";
                break;
              case "洛阳市":
                t = "洛阳牡丹甲天下。";
                break;
              default:
                t = "可否带我品尝河南烩面啦？";
            }
            break;
          case "安徽省":
            t = "蚌埠住了，芜湖起飞。";
            break;
          case "福建省":
            t = "井邑白云间，岩城远带山。";
            break;
          case "江西省":
            t = "落霞与孤鹜齐飞，秋水共长天一色。";
            break;
          case "山东省":
            t = "遥望齐州九点烟，一泓海水杯中泻。";
            break;
          case "湖北省":
            t = "来碗热干面！";
            break;
          case "湖南省":
            t = "74751，长沙斯塔克。";
            break;
          case "广东省":
            t = "老板来两斤福建人。";
            break;
          case "广西壮族自治区":
            t = "桂林山水甲天下。";
            break;
          case "海南省":
            t = "朝观日出逐白浪，夕看云起收霞光。";
            break;
          case "四川省":
            t = "康康川妹子。";
            break;
          case "贵州省":
            t = "茅台，学生，再塞200。";
            break;
          case "云南省":
            t = "玉龙飞舞云缠绕，万仞冰川直耸天。";
            break;
          case "西藏自治区":
            t = "躺在茫茫草原上，仰望蓝天。";
            break;
          case "陕西省":
            t = "来份臊子面加馍。";
            break;
          case "甘肃省":
            t = "羌笛何须怨杨柳，春风不度玉门关。";
            break;
          case "青海省":
            t = "牛肉干和老酸奶都好好吃。";
            break;
          case "宁夏回族自治区":
            t = "大漠孤烟直，长河落日圆。";
            break;
          case "新疆维吾尔自治区":
            t = "驼铃古道丝绸路，胡马犹闻唐汉风。";
            break;
          case "台湾省":
            t = "我在这头，大陆在那头。";
            break;
          case "香港特别行政区":
            t = "永定贼有残留地鬼嚎，迎击光非岁玉。";
            break;
          case "澳门特别行政区":
            t = "性感荷官，在线发牌。";
            break;
          default:
            t = "带我去你的城市逛逛吧！";
        }
        break;
      default:
        t = "带我去你的国家逛逛吧。";
    }
    let s = new Date();
    n =
      s.getHours() >= 5 && s.getHours() < 11
        ? "<span>上午好</span>，一日之计在于晨！"
        : s.getHours() >= 11 && s.getHours() < 13
        ? "<span>中午好</span>，该摸鱼吃午饭了。"
        : s.getHours() >= 13 && s.getHours() < 15
        ? "<span>下午好</span>，懒懒地睡个午觉吧！"
        : s.getHours() >= 15 && s.getHours() < 16
        ? "<span>三点几啦</span>，一起饮茶呀！"
        : s.getHours() >= 16 && s.getHours() < 19
        ? "<span>夕阳无限好！</span>"
        : s.getHours() >= 19 && s.getHours() < 24
        ? "<span>晚上好</span>，夜生活嗨起来！"
        : "夜深了，早点休息，少熬夜。";
    try {
      document.getElementById(
        "welcome-info"
      ).innerHTML = `<b><center>🎉 欢迎信息 🎉</center>&emsp;&emsp;欢迎来自 <span style="color:var(--blue-custom)">${a}</span> 的小伙伴，${n}您现在距离站长约 <span style="color:var(--blue-custom)">${o}</span> 公里，当前的IP地址为： <span style="color:var(--blue-custom)">${e}</span>， ${t}</b>`;
    } catch (e) {}
  }
  document.addEventListener("pjax:complete", function () {
    window.onscroll = percent;
  }),
    document.addEventListener("DOMContentLoaded", function () {
      window.onscroll = percent;
    }),
    document.addEventListener("pjax:complete", tonav),
    document.addEventListener("DOMContentLoaded", tonav),
    $.ajax({
      type: "get",
      url: "https://apis.map.qq.com/ws/location/v1/ip",
      data: { key: "QGHBZ-K7QKP-37IDO-L2HNC-WYIH6-O5BL4", output: "jsonp" },
      dataType: "jsonp",
      success: function (e) {
        ipLoacation = e;
      },
    }),
    (window.onload = showWelcome),
    document.addEventListener("pjax:complete", showWelcome);
  let TT = null;
  function debounce(e, t) {
    null !== TT && clearTimeout(TT), (TT = setTimeout(e, t));
  }
  function dark() {
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    var e,
      t,
      n,
      o,
      a = 0.05,
      s = document.getElementById("universe"),
      c = !0,
      r = "226,225,224",
      i = [];
    function l() {
      (e = window.innerWidth),
        (t = window.innerHeight),
        (n = 0.216 * e),
        s.setAttribute("width", e),
        s.setAttribute("height", t);
    }
    function d() {
      o.clearRect(0, 0, e, t);
      for (var n = i.length, a = 0; a < n; a++) {
        var s = i[a];
        s.move(), s.fadeIn(), s.fadeOut(), s.draw();
      }
    }
    function b() {
      (this.reset = function () {
        (this.giant = u(3)),
          (this.comet = !this.giant && !c && u(10)),
          (this.x = m(0, e - 10)),
          (this.y = m(0, t)),
          (this.r = m(1.1, 2.6)),
          (this.dx = m(a, 6 * a) + (this.comet + 1 - 1) * a * m(50, 120) + 0.1),
          (this.dy = -m(a, 6 * a) - (this.comet + 1 - 1) * a * m(50, 120)),
          (this.fadingOut = null),
          (this.fadingIn = !0),
          (this.opacity = 0),
          (this.opacityTresh = m(0.2, 1 - 0.4 * (this.comet + 1 - 1))),
          (this.do = m(5e-4, 0.002) + 0.001 * (this.comet + 1 - 1));
      }),
        (this.fadeIn = function () {
          this.fadingIn &&
            ((this.fadingIn = !(this.opacity > this.opacityTresh)),
            (this.opacity += this.do));
        }),
        (this.fadeOut = function () {
          this.fadingOut &&
            ((this.fadingOut = !(this.opacity < 0)),
            (this.opacity -= this.do / 2),
            (this.x > e || this.y < 0) && ((this.fadingOut = !1), this.reset()));
        }),
        (this.draw = function () {
          if ((o.beginPath(), this.giant))
            (o.fillStyle = "rgba(180,184,240," + this.opacity + ")"),
              o.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1);
          else if (this.comet) {
            (o.fillStyle = "rgba(" + r + "," + this.opacity + ")"),
              o.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1);
            for (var e = 0; e < 30; e++)
              (o.fillStyle =
                "rgba(" +
                r +
                "," +
                (this.opacity - (this.opacity / 20) * e) +
                ")"),
                o.rect(
                  this.x - (this.dx / 4) * e,
                  this.y - (this.dy / 4) * e - 2,
                  2,
                  2
                ),
                o.fill();
          } else
            (o.fillStyle = "rgba(226,225,142," + this.opacity + ")"),
              o.rect(this.x, this.y, this.r, this.r);
          o.closePath(), o.fill();
        }),
        (this.move = function () {
          (this.x += this.dx),
            (this.y += this.dy),
            !1 === this.fadingOut && this.reset(),
            (this.x > e - e / 4 || this.y < 0) && (this.fadingOut = !0);
        }),
        setTimeout(function () {
          c = !1;
        }, 50);
    }
    function u(e) {
      return Math.floor(1e3 * Math.random()) + 1 < 10 * e;
    }
    function m(e, t) {
      return Math.random() * (t - e) + e;
    }
    l(),
      window.addEventListener("resize", l, !1),
      (function () {
        o = s.getContext("2d");
        for (var e = 0; e < n; e++) (i[e] = new b()), i[e].reset();
        d();
      })(),
      (function e() {
        "dark" ==
          document.getElementsByTagName("html")[0].getAttribute("data-theme") &&
          d(),
          window.requestAnimationFrame(e);
      })();
  }
  function owoBig() {
    let e = 1,
      t = "",
      n = document.createElement("div"),
      o = document.querySelector("body");
    (n.id = "owo-big"), o.appendChild(n);
    let a = new MutationObserver((a) => {
      for (let s = 0; s < a.length; s++) {
        let c = a[s].addedNodes,
          r = "";
        2 == c.length &&
          "OwO-body" == c[1].className &&
          ((r = c[1]),
          document.body.clientWidth <= 768 &&
            r.addEventListener("contextmenu", (e) => e.preventDefault()),
          (r.onmouseover = (a) => {
            e &&
              "IMG" == a.target.tagName &&
              ((e = 0),
              (t = setTimeout(() => {
                let e = 3 * a.path[0].clientHeight,
                  t = 3 * a.path[0].clientWidth,
                  s = a.x - a.offsetX - (t - a.path[0].clientWidth) / 2,
                  c = a.y - a.offsetY;
                s + t > o.clientWidth && (s -= s + t - o.clientWidth + 10),
                  s < 0 && (s = 10),
                  (n.style.cssText = `display:flex; height:${e}px; width:${t}px; left:${s}px; top:${c}px;`),
                  (n.innerHTML = `<img src="${a.target.src}">`);
              }, 300)));
          }),
          (r.onmouseout = () => {
            (n.style.display = "none"), (e = 1), clearTimeout(t);
          }));
      }
    });
    a.observe(document.getElementById("post-comment"), {
      subtree: !0,
      childList: !0,
    });
  }
  function randomPost() {
    fetch("/baidusitemap.xml")
      .then((e) => e.text())
      .then((e) => new window.DOMParser().parseFromString(e, "text/xml"))
      .then((e) => {
        let t = e.querySelectorAll("url loc");
        for (;;) {
          let e = t[Math.floor(Math.random() * t.length)].innerHTML;
          if (location.href != e) return void (location.href = e);
        }
      });
  }
  if (
    (document.addEventListener("copy", function () {
      debounce(function () {
        new Vue({
          data: function () {
            this.$notify({
              title: "哎嘿！复制成功🍬",
              message: "若要转载最好保留原文链接哦，给你一个大大的赞！",
              position: "top-left",
              offset: 50,
              showClose: !0,
              type: "success",
              duration: 5e3,
            });
          },
        });
      }, 300);
    }),
    (document.onkeydown = function (e) {
      (123 == e.keyCode ||
        (e.ctrlKey &&
          e.shiftKey &&
          (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) ||
        (e.ctrlKey && 85 === e.keyCode)) &&
        debounce(function () {
          new Vue({
            data: function () {
              this.$notify({
                title: "你已被发现😜",
                message: "小伙子，扒源记住要遵循GPL协议！",
                position: "top-left",
                offset: 50,
                showClose: !0,
                type: "warning",
                duration: 5e3,
              });
            },
          });
        }, 300);
    }),
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    ) ||
      (window &&
        (() => {
          let e = 50,
            t = 150,
            n = "255, 255, 255",
            o = 1.5,
            a = 0.5,
            s = 0.7,
            c = 0.5;
          const r =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (e) {
              window.setTimeout(e, 1e3 / 60);
            };
          window.requestAnimationFrame = r;
          const i = document.getElementById("snow"),
            l = i.getContext("2d"),
            d = e;
          let b = -100,
            u = -100,
            m = [];
          (i.width = window.innerWidth), (i.height = window.innerHeight);
          const g = () => {
              l.clearRect(0, 0, i.width, i.height);
              const e = t;
              for (let t = 0; t < d; t++) {
                let o = m[t];
                const a = b,
                  s = u,
                  c = o.x,
                  r = o.y,
                  d = Math.sqrt((a - c) * (a - c) + (s - r) * (s - r));
                if (d < e) {
                  const t = (a - c) / d,
                    n = (s - r) / d,
                    i = e / (d * d) / 2;
                  (o.velX -= i * t), (o.velY -= i * n);
                } else
                  (o.velX *= 0.98),
                    o.velY < o.speed &&
                      o.speed - o.velY > 0.01 &&
                      (o.velY += 0.01 * (o.speed - o.velY)),
                    (o.velX += Math.cos((o.step += 0.05)) * o.stepSize);
                (l.fillStyle = "rgba(" + n + ", " + o.opacity + ")"),
                  (o.y += o.velY),
                  (o.x += o.velX),
                  (o.y >= i.height || o.y <= 0) && f(o),
                  (o.x >= i.width || o.x <= 0) && f(o),
                  l.beginPath(),
                  l.arc(o.x, o.y, o.size, 0, 2 * Math.PI),
                  l.fill();
              }
              r(g);
            },
            f = (e) => {
              (e.x = Math.floor(Math.random() * i.width)),
                (e.y = 0),
                (e.size = 3 * Math.random() + 2),
                (e.speed = 1 * Math.random() + 0.5),
                (e.velY = e.speed),
                (e.velX = 0),
                (e.opacity = 0.5 * Math.random() + 0.3);
            };
          document.addEventListener("mousemove", (e) => {
            (b = e.clientX), (u = e.clientY);
          }),
            window.addEventListener("resize", () => {
              (i.width = window.innerWidth), (i.height = window.innerHeight);
            }),
            (() => {
              for (let e = 0; e < d; e++) {
                const e = Math.floor(Math.random() * i.width),
                  t = Math.floor(Math.random() * i.height),
                  n = 3 * Math.random() + o,
                  r = 1 * Math.random() + a,
                  l = 0.5 * Math.random() + s;
                m.push({
                  speed: r,
                  velX: 0,
                  velY: r,
                  x: e,
                  y: t,
                  size: n,
                  stepSize: (Math.random() / 30) * c,
                  step: 0,
                  angle: 180,
                  opacity: l,
                });
              }
              g();
            })();
        })()),
    dark(),
    document.addEventListener("pjax:complete", function () {
      document.getElementById("post-comment") && owoBig();
    }),
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("post-comment") && owoBig();
    }),
    document.body.clientWidth > 992)
  ) {
    function getBasicInfo() {
      var e = $(window).height(),
        t = $("body")[0].scrollHeight,
        n = $(window).scrollTop();
      return {
        ViewH: e,
        DocH: t,
        ScrollTop: n,
        Band_H: (n / (t - e)) * 100,
        S_V: t - e,
      };
    }
    function show(e) {
      e.ScrollTop > 0.001
        ? $(".neko").css("display", "block")
        : $(".neko").css("display", "none");
    }
    !(function (e) {
      e.fn.nekoScroll = function (t) {
        var n = e.extend(
            {
              top: "0",
              scroWidth: "6px",
              z_index: 9999,
              zoom: 0.9,
              borderRadius: "5px",
              right: "55.6px",
              nekoImg: "https://bu.dusays.com/2022/07/20/62d812db74be9.png",
              hoverMsg: "夏天啦~",
              color: "var(--theme-color)",
              during: 500,
              blog_body: "body",
            },
            t
          ),
          o =
            "" !== this.prop("className")
              ? "." + this.prop("className")
              : "" !== this.prop("id")
              ? "#" + this.prop("id")
              : this.prop("nodeName");
        0 == e(".neko").length &&
          this.after(
            '<div class="neko" id=' +
              n.nekoname +
              ' data-msg="' +
              n.hoverMsg +
              '"></div>'
          );
        let a = getBasicInfo();
        return (
          e(o).css({
            position: "fixed",
            width: n.scroWidth,
            top: n.top,
            height: a.Band_H * n.zoom * a.ViewH * 0.01 + "px",
            "z-index": n.z_index,
            "background-color": n.bgcolor,
            "border-radius": n.borderRadius,
            right: n.right,
            "background-image": "url(" + n.scImg + ")",
            "background-image":
              "-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)",
            "border-radius": "2em",
            "background-size": "contain",
          }),
          e("#" + n.nekoname).css({
            position: "fixed",
            top: a.Band_H * n.zoom * a.ViewH * 0.01 - 50 + "px",
            "z-index": 10 * n.z_index,
            right: n.right,
            "background-image": "url(" + n.nekoImg + ")",
          }),
          show(getBasicInfo()),
          e(window).scroll(function () {
            let t = getBasicInfo();
            show(t),
              e(o).css({
                position: "fixed",
                width: n.scroWidth,
                top: n.top,
                height: t.Band_H * n.zoom * t.ViewH * 0.01 + "px",
                "z-index": n.z_index,
                "background-color": n.bgcolor,
                "border-radius": n.borderRadius,
                right: n.right,
                "background-image": "url(" + n.scImg + ")",
                "background-image":
                  "-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)",
                "border-radius": "2em",
                "background-size": "contain",
              }),
              e("#" + n.nekoname).css({
                position: "fixed",
                top: t.Band_H * n.zoom * t.ViewH * 0.01 - 50 + "px",
                "z-index": 10 * n.z_index,
                right: n.right,
                "background-image": "url(" + n.nekoImg + ")",
              }),
              t.ScrollTop == t.S_V
                ? e("#" + n.nekoname).addClass("showMsg")
                : (e("#" + n.nekoname).removeClass("showMsg"),
                  e("#" + n.nekoname).attr("data-msg", n.hoverMsg));
          }),
          this.click(function (e) {
            btf.scrollToDest(0, 500);
          }),
          e("#" + n.nekoname).click(function () {
            btf.scrollToDest(0, 500);
          }),
          this
        );
      };
    })(jQuery),
      $(document).ready(function () {
        $("#myscoll").nekoScroll({
          bgcolor: "rgb(0 0 0 / .5)",
          borderRadius: "2em",
          zoom: 0.9,
        });
      });
  }
  function setMask() {
    return null != document.getElementsByClassName("rmMask")[0]
      ? document.getElementsByClassName("rmMask")[0]
      : ((mask = document.createElement("div")),
        (mask.className = "rmMask"),
        (mask.style.width = window.innerWidth + "px"),
        (mask.style.height = window.innerHeight + "px"),
        (mask.style.background = "#fff"),
        (mask.style.opacity = ".0"),
        (mask.style.position = "fixed"),
        (mask.style.top = "0"),
        (mask.style.left = "0"),
        (mask.style.zIndex = 998),
        document.body.appendChild(mask),
        (document.getElementById("rightMenu").style.zIndex = 19198),
        mask);
  }
  function insertAtCursor(e, t) {
    if (document.selection)
      e.focus(),
        (sel = document.selection.createRange()),
        (sel.text = t),
        sel.select();
    else if (e.selectionStart || "0" == e.selectionStart) {
      var n = e.selectionStart,
        o = e.selectionEnd,
        a = e.scrollTop;
      (e.value =
        e.value.substring(0, n) + t + e.value.substring(o, e.value.length)),
        a > 0 && (e.scrollTop = a),
        e.focus(),
        (e.selectionStart = n + t.length),
        (e.selectionEnd = n + t.length);
    } else (e.value += t), e.focus();
  }
  let rmf = {};
  function popupMenu() {
    (window.oncontextmenu = function (e) {
      if ("off" == mouseMode) return !0;
      $(".rightMenu-group.hide").hide(),
        document.getSelection().toString() && $("#menu-text").show(),
        (document.getElementById("post") || document.getElementById("page")) &&
          $("#menu-post").show();
      var t = window.document.body;
      t = e.target;
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(
        window.getSelection().toString()
      ) &&
        "A" != t.tagName &&
        $("#menu-too").show(),
        "A" == t.tagName
          ? ($("#menu-to").show(),
            (rmf.open = function () {
              (-1 == t.href.indexOf("http://") &&
                -1 == t.href.indexOf("https://")) ||
              -1 != t.href.indexOf("yisous.xyz")
                ? pjax.loadUrl(t.href)
                : (location.href = t.href);
            }),
            (rmf.openWithNewTab = function () {
              window.open(t.href);
            }),
            (rmf.copyLink = function () {
              let e = t.href,
                n = document.createElement("textarea");
              (n.value = e),
                document.body.appendChild(n),
                n.select(),
                document.execCommand("Copy"),
                document.body.removeChild(n);
            }))
          : "IMG" == t.tagName
          ? ($("#menu-img").show(),
            (rmf.openWithNewTab = function () {
              window.open(t.src);
            }),
            (rmf.click = function () {
              t.click();
            }),
            (rmf.copyLink = function () {
              let e = t.src,
                n = document.createElement("textarea");
              (n.value = e),
                document.body.appendChild(n),
                n.select(),
                document.execCommand("Copy"),
                document.body.removeChild(n);
            }),
            (rmf.saveAs = function () {
              var e = document.createElement("a"),
                n = t.src,
                o = n.split("/")[-1];
              (e.href = n),
                (e.download = o),
                e.click(),
                window.URL.revokeObjectURL(n);
            }))
          : ("TEXTAREA" != t.tagName && "INPUT" != t.tagName) ||
            ($("#menu-paste").show(),
            (rmf.paste = function () {
              navigator.permissions
                .query({ name: "clipboard-read" })
                .then((e) => {
                  "granted" == e.state || "prompt" == e.state
                    ? navigator.clipboard.readText().then((e) => {
                        insertAtCursor(t, e);
                      })
                    : Snackbar.show({
                        text: "请允许读取剪贴板！",
                        pos: "top-center",
                        showAction: !1,
                      });
                });
            }));
      let n = e.clientX + 10,
        o = e.clientY,
        a = $("#rightMenu").width(),
        s = $("#rightMenu").height();
      return (
        n + a > window.innerWidth && (n -= a + 10),
        o + s > window.innerHeight && (o -= o + s - window.innerHeight),
        (mask = setMask()),
        $(".rightMenu-item").click(() => {
          $(".rmMask").attr("style", "display: none");
        }),
        $(window).resize(() => {
          rmf.showRightMenu(!1), $(".rmMask").attr("style", "display: none");
        }),
        (mask.onclick = () => {
          $(".rmMask").attr("style", "display: none");
        }),
        rmf.showRightMenu(!0, o, n),
        $(".rmMask").attr("style", "display: flex"),
        !1
      );
    }),
      window.addEventListener("click", function () {
        rmf.showRightMenu(!1);
      });
  }
  (rmf.showRightMenu = function (e, t = 0, n = 0) {
    let o = $("#rightMenu");
    o.css("top", t + "px").css("left", n + "px"), e ? o.show() : o.hide();
  }),
    (rmf.copyWordsLink = function () {
      let e = window.location.href,
        t = document.createElement("textarea");
      (t.value = e),
        document.body.appendChild(t),
        t.select(),
        document.execCommand("Copy"),
        document.body.removeChild(t);
    }),
    (rmf.switchReadMode = function () {
      const e = document.body;
      e.classList.add("read-mode");
      const t = document.createElement("button");
      (t.type = "button"),
        (t.className = "fas fa-sign-out-alt exit-readmode"),
        e.appendChild(t),
        t.addEventListener("click", function n() {
          e.classList.remove("read-mode"),
            t.remove(),
            t.removeEventListener("click", n);
        });
    }),
    (rmf.copySelect = function () {
      document.execCommand("Copy", !1, null);
    }),
    (rmf.scrollToTop = function () {
      document.getElementsByClassName("menus_items")[1].setAttribute("style", ""),
        document
          .getElementById("name-container")
          .setAttribute("style", "display:none"),
        btf.scrollToDest(0, 500);
    }),
    document.body.addEventListener("touchmove", function () {}, { passive: !1 }),
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    ) || popupMenu();
  const box = document.documentElement;
  function addLongtabListener(e, t) {
    let n = 0;
    (e.ontouchstart = () => {
      (n = 0),
        (n = setTimeout(() => {
          t(), (n = 0);
        }, 380));
    }),
      (e.ontouchmove = () => {
        clearTimeout(n), (n = 0);
      }),
      (e.ontouchend = () => {
        n && clearTimeout(n);
      });
  }
  addLongtabListener(box, popupMenu),
    (rmf.fullScreen = function () {
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen();
    }),
    null == localStorage.getItem("mouse") && localStorage.setItem("mouse", "on");
  var mouseMode = localStorage.getItem("mouse");
  function changeMouseMode() {
    "on" == localStorage.getItem("mouse")
      ? ((mouseMode = "off"),
        localStorage.setItem("mouse", "off"),
        debounce(function () {
          new Vue({
            data: function () {
              this.$notify({
                title: "切换右键模式成功🍔",
                message: "当前鼠标右键已恢复为系统默认！",
                position: "top-left",
                offset: 50,
                showClose: !0,
                type: "success",
                duration: 5e3,
              });
            },
          });
        }, 300))
      : ((mouseMode = "on"),
        localStorage.setItem("mouse", "on"),
        debounce(function () {
          new Vue({
            data: function () {
              this.$notify({
                title: "切换右键模式成功🍔",
                message: "当前鼠标右键已更换为网站指定样式！",
                position: "top-left",
                offset: 50,
                showClose: !0,
                type: "success",
                duration: 5e3,
              });
            },
          });
        }, 300));
  }
  var now1 = new Date();
  function createtime1() {
    var e = new Date("08/09/2022 00:00:00");
    now1.setTime(now1.getTime() + 250);
    var t = (now1 - e) / 1e3 / 60 / 60 / 24,
      n = [
        "欢迎来到Fomalhaut🥝の小家!",
        "Future is now 🍭🍭🍭",
        "\n        \n███████  ██████  ███    ███  █████  ██      ██   ██  █████  ██    ██ ████████ \n██      ██    ██ ████  ████ ██   ██ ██      ██   ██ ██   ██ ██    ██    ██    \n█████   ██    ██ ██ ████ ██ ███████ ██      ███████ ███████ ██    ██    ██    \n██      ██    ██ ██  ██  ██ ██   ██ ██      ██   ██ ██   ██ ██    ██    ██    \n██       ██████  ██      ██ ██   ██ ███████ ██   ██ ██   ██  ██████     ██   \n                                              \n",
        "小站已经苟活",
        Math.floor(t),
        "天啦!",
        "©2022 By Fomalhaut",
      ];
    setTimeout(
      console.log.bind(
        console,
        `\n%c${n[0]} %c ${n[1]} %c ${n[2]} %c${n[3]}%c ${n[4]}%c ${n[5]}\n\n%c ${n[6]}\n`,
        "color:#39c5bb",
        "",
        "color:#39c5bb",
        "color:#39c5bb",
        "",
        "color:#39c5bb",
        ""
      )
    );
  }
  function createtime2() {
    var e = [
      "NCC2-036",
      "调用前置摄像头拍照成功，识别为「大聪明」",
      "Photo captured: ",
      " 🤪 ",
    ];
    setTimeout(
      console.log.bind(
        console,
        `%c ${e[0]} %c ${e[1]} %c \n${e[2]} %c\n${e[3]}`,
        "color:white; background-color:#10bcc0",
        "",
        "",
        'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
      )
    ),
      setTimeout(
        console.log.bind(
          console,
          "%c WELCOME %c 欢迎光临，大聪明",
          "color:white; background-color:#23c682",
          ""
        )
      ),
      setTimeout(
        console.warn.bind(
          console,
          "%c ⚡ Powered by Fomalhaut🥝 %c 你正在访问Fomalhaut🥝の小家",
          "color:white; background-color:#f0ad4e",
          ""
        )
      ),
      setTimeout(
        console.log.bind(
          console,
          "%c W23-12 %c 系统监测到你已打开控制台",
          "color:white; background-color:#4f90d9",
          ""
        )
      ),
      setTimeout(
        console.warn.bind(
          console,
          "%c S013-782 %c 你现在正处于监控中",
          "color:white; background-color:#d9534f",
          ""
        )
      );
  }
  function switchNightMode() {
    localStorage.setItem("lastTime", Date.now()),
      document
        .querySelector("body")
        .insertAdjacentHTML(
          "beforeend",
          '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"><div id="sun"></div><div id="moon"></div></div></div>'
        ),
      setTimeout(function () {
        document.querySelector("body").classList.contains("DarkMode")
          ? (document.querySelector("body").classList.remove("DarkMode"),
            localStorage.setItem("isDark", "0"),
            document
              .getElementById("modeicon")
              .setAttribute("xlink:href", "#icon-moon"))
          : (document.querySelector("body").classList.add("DarkMode"),
            localStorage.setItem("isDark", "1"),
            document
              .getElementById("modeicon")
              .setAttribute("xlink:href", "#icon-sun")),
          setTimeout(function () {
            (document.getElementsByClassName(
              "Cuteen_DarkSky"
            )[0].style.transition = "opacity 3s"),
              (document.getElementsByClassName(
                "Cuteen_DarkSky"
              )[0].style.opacity = "0"),
              setTimeout(function () {
                document.getElementsByClassName("Cuteen_DarkSky")[0].remove();
              }, 1e3);
          }, 2e3);
      });
    "light" ===
    ("dark" === document.documentElement.getAttribute("data-theme")
      ? "dark"
      : "light")
      ? ((document.getElementById("sun").style.opacity = "1"),
        (document.getElementById("moon").style.opacity = "0"),
        setTimeout(function () {
          (document.getElementById("sun").style.opacity = "0"),
            (document.getElementById("moon").style.opacity = "1");
        }, 1e3),
        activateDarkMode(),
        saveToLocal.set("theme", "dark", 2),
        document
          .getElementById("modeicon")
          .setAttribute("xlink:href", "#icon-sun"),
        setTimeout(() => {
          new Vue({
            data: function () {
              this.$notify({
                title: "关灯啦🌙",
                message: "当前已成功切换至夜间模式！",
                position: "top-left",
                offset: 50,
                showClose: !0,
                type: "success",
                duration: 5e3,
              });
            },
          });
        }, 2e3))
      : ((document.getElementById("sun").style.opacity = "0"),
        (document.getElementById("moon").style.opacity = "1"),
        setTimeout(function () {
          (document.getElementById("sun").style.opacity = "1"),
            (document.getElementById("moon").style.opacity = "0");
        }, 1e3),
        activateLightMode(),
        saveToLocal.set("theme", "light", 2),
        document.querySelector("body").classList.add("DarkMode"),
        document
          .getElementById("modeicon")
          .setAttribute("xlink:href", "#icon-moon"),
        setTimeout(() => {
          new Vue({
            data: function () {
              this.$notify({
                title: "开灯啦🌞",
                message: "当前已成功切换至白天模式！",
                position: "top-left",
                offset: 50,
                showClose: !0,
                type: "success",
                duration: 5e3,
              });
            },
          });
        }, 2e3)),
      "function" == typeof utterancesTheme && utterancesTheme(),
      "object" == typeof FB && window.loadFBComment(),
      window.DISQUS &&
        document.getElementById("disqus_thread").children.length &&
        setTimeout(() => window.disqusReset(), 200);
  }
  function share_() {
    let e = window.location.origin + window.location.pathname;
    try {
      var t = document.title,
        n = t.endsWith("| Fomalhaut🥝") ? t.substring(0, t.length - 14) : t;
      navigator.clipboard.writeText(
        "Fomalhaut🥝的站内分享\n标题：" +
          n +
          "\n链接：" +
          e +
          "\n欢迎来访！🍭🍭🍭"
      ),
        new Vue({
          data: function () {
            this.$notify({
              title: "成功复制分享信息🎉",
              message: "您现在可以通过粘贴直接跟小伙伴分享了！",
              position: "top-left",
              offset: 50,
              showClose: !0,
              type: "success",
              duration: 5e3,
            });
          },
        });
    } catch (e) {
      console.error("复制失败！", e);
    }
  }
  function share() {
    debounce(share_, 300);
  }
  createtime1(),
    createtime2(),
    (console.log = function () {}),
    (console.error = function () {}),
    (console.warn = function () {});
  var titleTime,
    OriginTitile = document.title;
  function searchSize() {
    if (document.body.clientWidth > 768) return;
    let e = document.querySelector("#algolia-hits");
    e.addEventListener("DOMNodeInserted", () => {
      e.children[0].style.maxHeight =
        document.documentElement.clientHeight - 210 + "px";
    });
  }
  document.addEventListener("visibilitychange", function () {
    document.hidden
      ? ((document.title = "👀跑哪里去了~"), clearTimeout(titleTime))
      : ((document.title = "🐖抓到你啦～"),
        (titleTime = setTimeout(function () {
          document.title = OriginTitile;
        }, 2e3)));
  }),
    searchSize(),
    window.addEventListener("resize", searchSize);
  var lunarInfo = [
      19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168,
      42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800,
      42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958,
      54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432,
      120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808,
      46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856,
      19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152,
      42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380,
      42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859,
      59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034,
      22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360,
      42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208,
      53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966,
      53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600,
      111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984,
      27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893,
      22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940,
      42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732,
      53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034,
      54560,
    ],
    solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    Zhi = [
      "子",
      "丑",
      "寅",
      "卯",
      "辰",
      "巳",
      "午",
      "未",
      "申",
      "酉",
      "戌",
      "亥",
    ],
    Animals = [
      "鼠",
      "牛",
      "虎",
      "兔",
      "龙",
      "蛇",
      "马",
      "羊",
      "猴",
      "鸡",
      "狗",
      "猪",
    ],
    solarTerm = [
      "小寒",
      "大寒",
      "立春",
      "雨水",
      "惊蛰",
      "春分",
      "清明",
      "谷雨",
      "立夏",
      "小满",
      "芒种",
      "夏至",
      "小暑",
      "大暑",
      "立秋",
      "处暑",
      "白露",
      "秋分",
      "寒露",
      "霜降",
      "立冬",
      "小雪",
      "大雪",
      "冬至",
    ],
    sTermInfo = [
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "9778397bd19801ec9210c965cc920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd197c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bcf97c3598082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd19801ec9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bd07f1487f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b97bd197c36c9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b70c9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "977837f0e37f149b0723b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0723b06bd",
      "7f07e7f0e37f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e37f14998083b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14898082b0723b02d5",
      "7f07e7f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66aa89801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e26665b66a449801e9808297c35",
      "665f67f0e37f1489801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
    ],
    nStr1 = ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
    nStr2 = ["初", "十", "廿", "卅"],
    nStr3 = [
      "正",
      "二",
      "三",
      "四",
      "五",
      "六",
      "七",
      "八",
      "九",
      "十",
      "冬",
      "腊",
    ];
  function lYearDays(e) {
    var t,
      n = 348;
    for (t = 32768; t > 8; t >>= 1) n += lunarInfo[e - 1900] & t ? 1 : 0;
    return n + leapDays(e);
  }
  function leapMonth(e) {
    return 15 & lunarInfo[e - 1900];
  }
  function leapDays(e) {
    return leapMonth(e) ? (65536 & lunarInfo[e - 1900] ? 30 : 29) : 0;
  }
  function monthDays(e, t) {
    return t > 12 || t < 1 ? -1 : lunarInfo[e - 1900] & (65536 >> t) ? 30 : 29;
  }
  function solarDays(e, t) {
    if (t > 12 || t < 1) return -1;
    var n = t - 1;
    return 1 === n
      ? (e % 4 == 0 && e % 100 != 0) || e % 400 == 0
        ? 29
        : 28
      : solarMonth[n];
  }
  function toGanZhiYear(e) {
    var t = (e - 3) % 10,
      n = (e - 3) % 12;
    return 0 === t && (t = 10), 0 === n && (n = 12), Gan[t - 1] + Zhi[n - 1];
  }
  function toAstro(e, t) {
    return (
      "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(
        2 * e -
          (t < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][e - 1] ? 2 : 0),
        2
      ) + "座"
    );
  }
  function toGanZhi(e) {
    return Gan[e % 10] + Zhi[e % 12];
  }
  function getTerm(e, t) {
    if (e < 1900 || e > 2100) return -1;
    if (t < 1 || t > 24) return -1;
    var n = sTermInfo[e - 1900],
      o = [
        parseInt("0x" + n.substr(0, 5)).toString(),
        parseInt("0x" + n.substr(5, 5)).toString(),
        parseInt("0x" + n.substr(10, 5)).toString(),
        parseInt("0x" + n.substr(15, 5)).toString(),
        parseInt("0x" + n.substr(20, 5)).toString(),
        parseInt("0x" + n.substr(25, 5)).toString(),
      ],
      a = [
        o[0].substr(0, 1),
        o[0].substr(1, 2),
        o[0].substr(3, 1),
        o[0].substr(4, 2),
        o[1].substr(0, 1),
        o[1].substr(1, 2),
        o[1].substr(3, 1),
        o[1].substr(4, 2),
        o[2].substr(0, 1),
        o[2].substr(1, 2),
        o[2].substr(3, 1),
        o[2].substr(4, 2),
        o[3].substr(0, 1),
        o[3].substr(1, 2),
        o[3].substr(3, 1),
        o[3].substr(4, 2),
        o[4].substr(0, 1),
        o[4].substr(1, 2),
        o[4].substr(3, 1),
        o[4].substr(4, 2),
        o[5].substr(0, 1),
        o[5].substr(1, 2),
        o[5].substr(3, 1),
        o[5].substr(4, 2),
      ];
    return parseInt(a[t - 1]);
  }
  function toChinaMonth(e) {
    if (e > 12 || e < 1) return -1;
    var t = nStr3[e - 1];
    return (t += "月");
  }
  function toChinaDay(e) {
    var t;
    switch (e) {
      case 10:
        t = "初十";
        break;
      case 20:
        t = "二十";
        break;
      case 30:
        t = "三十";
        break;
      default:
        (t = nStr2[Math.floor(e / 10)]), (t += nStr1[e % 10]);
    }
    return t;
  }
  function getAnimal(e) {
    return Animals[(e - 4) % 12];
  }
  function solar2lunar(e, t, n) {
    if (e < 1900 || e > 2100) return -1;
    if (1900 === e && 1 === t && n < 31) return -1;
    var o,
      a,
      s = null,
      c = 0;
    (e = (s = e ? new Date(e, parseInt(t) - 1, n) : new Date()).getFullYear()),
      (t = s.getMonth() + 1),
      (n = s.getDate());
    var r =
      (Date.UTC(s.getFullYear(), s.getMonth(), s.getDate()) -
        Date.UTC(1900, 0, 31)) /
      864e5;
    for (o = 1900; o < 2101 && r > 0; o++) r -= c = lYearDays(o);
    r < 0 && ((r += c), o--);
    var i = new Date(),
      l = !1;
    i.getFullYear() === e &&
      i.getMonth() + 1 === t &&
      i.getDate() === n &&
      (l = !0);
    var d = s.getDay(),
      b = nStr1[d];
    0 === d && (d = 7);
    var u = o;
    a = leapMonth(o);
    var m = !1;
    for (o = 1; o < 13 && r > 0; o++)
      a > 0 && o === a + 1 && !1 === m
        ? (--o, (m = !0), (c = leapDays(u)))
        : (c = monthDays(u, o)),
        !0 === m && o === a + 1 && (m = !1),
        (r -= c);
    0 === r && a > 0 && o === a + 1 && (m ? (m = !1) : ((m = !0), --o)),
      r < 0 && ((r += c), --o);
    var g = o,
      f = r + 1,
      p = t - 1,
      h = toGanZhiYear(u),
      y = getTerm(e, 2 * t - 1),
      w = getTerm(e, 2 * t),
      v = toGanZhi(12 * (e - 1900) + t + 11);
    n >= y && (v = toGanZhi(12 * (e - 1900) + t + 12));
    var k = !1,
      x = null;
    y === n && ((k = !0), (x = solarTerm[2 * t - 2])),
      w === n && ((k = !0), (x = solarTerm[2 * t - 1]));
    var I = toGanZhi(Date.UTC(e, p, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10 + n - 1),
      S = toAstro(t, n);
    return {
      lYear: u,
      lMonth: g,
      lDay: f,
      Animal: getAnimal(u),
      IMonthCn: (m ? "闰" : "") + toChinaMonth(g),
      IDayCn: toChinaDay(f),
      cYear: e,
      cMonth: t,
      cDay: n,
      gzYear: h,
      gzMonth: v,
      gzDay: I,
      isToday: l,
      isLeap: m,
      nWeek: d,
      ncWeek: "星期" + b,
      isTerm: k,
      Term: x,
      astro: S,
    };
  }
  var calendarFormatter = {
      solar2lunar: function (e, t, n) {
        return solar2lunar(e, t, n);
      },
      lunar2solar: function (e, t, n, o) {
        if ((o = !!o) && leapMonth !== t) return -1;
        if (
          (2100 === e && 12 === t && n > 1) ||
          (1900 === e && 1 === t && n < 31)
        )
          return -1;
        var a = monthDays(e, t),
          s = a;
        if ((o && (s = leapDays(e, t)), e < 1900 || e > 2100 || n > s)) return -1;
        for (var c = 0, r = 1900; r < e; r++) c += lYearDays(r);
        var i = 0,
          l = !1;
        for (r = 1; r < t; r++)
          (i = leapMonth(e)),
            l || (i <= r && i > 0 && ((c += leapDays(e)), (l = !0))),
            (c += monthDays(e, r));
        o && (c += a);
        var d = Date.UTC(1900, 1, 30, 0, 0, 0),
          b = new Date(864e5 * (c + n - 31) + d);
        return solar2lunar(
          b.getUTCFullYear(),
          b.getUTCMonth() + 1,
          b.getUTCDate()
        );
      },
    },
    d = new Date();
  (m = d.getMonth() + 1),
    (dd = d.getDate()),
    (y = d.getFullYear()),
    9 == m &&
      18 == dd &&
      (document
        .getElementsByTagName("html")[0]
        .setAttribute("style", "filter: grayscale(60%);"),
      "1" != sessionStorage.getItem("isPopupWindow") &&
        (Swal.fire(
          "今天是九一八事变" +
            (y - 1931).toString() +
            "周年纪念日\n🪔勿忘国耻，振兴中华🪔"
        ),
        sessionStorage.setItem("isPopupWindow", "1"))),
    7 == m &&
      7 == dd &&
      (document
        .getElementsByTagName("html")[0]
        .setAttribute("style", "filter: grayscale(60%);"),
      "1" != sessionStorage.getItem("isPopupWindow") &&
        (Swal.fire(
          "今天是卢沟桥事变" +
            (y - 1937).toString() +
            "周年纪念日\n🪔勿忘国耻，振兴中华🪔"
        ),
        sessionStorage.setItem("isPopupWindow", "1"))),
    12 == m &&
      13 == dd &&
      (document
        .getElementsByTagName("html")[0]
        .setAttribute("style", "filter: grayscale(60%);"),
      "1" != sessionStorage.getItem("isPopupWindow") &&
        (Swal.fire(
          "今天是南京大屠杀" +
            (y - 1937).toString() +
            "周年纪念日\n🪔勿忘国耻，振兴中华🪔"
        ),
        sessionStorage.setItem("isPopupWindow", "1"))),
    8 == m &&
      14 == dd &&
      (document
        .getElementsByTagName("html")[0]
        .setAttribute("style", "filter: grayscale(60%);"),
      "1" != sessionStorage.getItem("isPopupWindow") &&
        (Swal.fire("今天是世界慰安妇纪念日\n🪔勿忘国耻，振兴中华🪔"),
        sessionStorage.setItem("isPopupWindow", "1"))),
    10 == m &&
      dd <= 3 &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("祝祖国" + (y - 1949).toString() + "岁生日快乐！"),
      sessionStorage.setItem("isPopupWindow", "1")),
    8 == m &&
      15 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("小日子已经投降" + (y - 1945).toString() + "年了😃"),
      sessionStorage.setItem("isPopupWindow", "1")),
    1 == m &&
      1 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire(y.toString() + "年元旦快乐！🎉"),
      sessionStorage.setItem("isPopupWindow", "1")),
    3 == m &&
      8 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("各位女神们，妇女节快乐！👩"),
      sessionStorage.setItem("isPopupWindow", "1")),
    (l = [
      "非常抱歉，因为不可控原因，博客将于明天停止运营！",
      "好消息，日本没了！",
      "美国垮了，原因竟然是川普！",
      "微软垮了！",
      "你的电脑已经过载，建议立即关机！",
      "你知道吗？站长很喜欢你哦！",
      "一分钟有61秒哦",
      "你喜欢的人跟别人跑了！",
    ]),
    4 == m &&
      1 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire(l[Math.floor(Math.random() * l.length)]),
      sessionStorage.setItem("isPopupWindow", "1")),
    5 == m &&
      1 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("劳动节快乐\n为各行各业辛勤工作的人们致敬！"),
      sessionStorage.setItem("isPopupWindow", "1")),
    5 == m &&
      4 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("青年节快乐\n青春不是回忆逝去,而是把握现在！"),
      sessionStorage.setItem("isPopupWindow", "1")),
    5 == m &&
      20 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("今年是520情人节\n快和你喜欢的人一起过吧！💑"),
      sessionStorage.setItem("isPopupWindow", "1")),
    7 == m &&
      1 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("祝中国共产党" + (y - 1921).toString() + "岁生日快乐！"),
      sessionStorage.setItem("isPopupWindow", "1")),
    9 == m &&
      10 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("各位老师们教师节快乐！👩‍🏫"),
      sessionStorage.setItem("isPopupWindow", "1")),
    12 == m &&
      25 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("圣诞节快乐！🎄"), sessionStorage.setItem("isPopupWindow", "1")),
    8 == m &&
      11 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("祝站长" + (y - 1998).toString() + "岁生日快乐！🥝"),
      sessionStorage.setItem("isPopupWindow", "1")),
    6 == m &&
      30 == dd &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("祝小猫咪" + (y - 1999).toString() + "岁生日快乐！🐱"),
      sessionStorage.setItem("isPopupWindow", "1")),
    ((2023 == y && 4 == m && 5 == dd) ||
      (2024 == y && 4 == m && 4 == dd) ||
      (2025 == y && 4 == m && 4 == dd)) &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("清明时节雨纷纷,一束鲜花祭故人💐"),
      sessionStorage.setItem("isPopupWindow", "1")),
    ((2023 == y && 12 == m && 22 == dd) ||
      (2024 == y && 12 == m && 21 == dd) ||
      (2025 == y && 12 == m && 21 == dd)) &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("冬至快乐\n快吃上一碗热热的汤圆和饺子吧🧆"),
      sessionStorage.setItem("isPopupWindow", "1"));
  var CURSOR,
    lunar = calendarFormatter.solar2lunar();
  (("正月" == lunar.IMonthCn && "初六" == lunar.IDayCn) ||
    ("正月" == lunar.IMonthCn && "初五" == lunar.IDayCn) ||
    ("正月" == lunar.IMonthCn && "初四" == lunar.IDayCn) ||
    ("正月" == lunar.IMonthCn && "初三" == lunar.IDayCn) ||
    ("正月" == lunar.IMonthCn && "初二" == lunar.IDayCn) ||
    ("正月" == lunar.IMonthCn && "初一" == lunar.IDayCn) ||
    ("腊月" == lunar.IMonthCn && "三十" == lunar.IDayCn) ||
    ("腊月" == lunar.IMonthCn && "廿九" == lunar.IDayCn)) &&
    "1" != sessionStorage.getItem("isPopupWindow") &&
    (Swal.fire(y.toString() + "年新年快乐\n🎊祝你心想事成，诸事顺利🎊"),
    sessionStorage.setItem("isPopupWindow", "1")),
    "正月" == lunar.IMonthCn &&
      "十五" == lunar.IDayCn &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("元宵节快乐\n送你一个大大的灯笼🧅"),
      sessionStorage.setItem("isPopupWindow", "1")),
    "五月" == lunar.IMonthCn &&
      "初五" == lunar.IDayCn &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("端午节快乐\n请你吃一条粽子🍙"),
      sessionStorage.setItem("isPopupWindow", "1")),
    "七月" == lunar.IMonthCn &&
      "初七" == lunar.IDayCn &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("七夕节快乐\n黄昏后,柳梢头,牛郎织女来碰头"),
      sessionStorage.setItem("isPopupWindow", "1")),
    "八月" == lunar.IMonthCn &&
      "十五" == lunar.IDayCn &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("中秋节快乐\n请你吃一块月饼🍪"),
      sessionStorage.setItem("isPopupWindow", "1")),
    "九月" == lunar.IMonthCn &&
      "初九" == lunar.IDayCn &&
      "1" != sessionStorage.getItem("isPopupWindow") &&
      (Swal.fire("重阳节快乐\n独在异乡为异客，每逢佳节倍思亲"),
      sessionStorage.setItem("isPopupWindow", "1")),
    (Math.lerp = (e, t, n) => (1 - n) * e + n * t);
  const getStyle2 = (e, t) => {
      try {
        return window.getComputedStyle
          ? window.getComputedStyle(e)[t]
          : e.currentStyle[t];
      } catch (e) {}
      return "";
    },
    map = new Map();
  map.set("red", "rgb(239, 90, 90)"),
    map.set("orange", "rgb(228, 149, 66)"),
    map.set("yellow", "rgb(194, 205, 90)"),
    map.set("purple", "rgb(205, 90, 195)"),
    map.set("purepurple", "rgb(147, 90, 205)"),
    map.set("blue", "rgb(102, 204, 255)"),
    map.set("puregreen", "rgb(90, 205, 130)"),
    map.set("green", "rgb(57, 197, 187)"),
    map.set("pink", "rgb(237, 112, 155)"),
    map.set("black", "rgb(45, 45, 45)"),
    map.set("darkblue", "rgb(97, 100, 159)"),
    map.set("heoblue", "rgb(66, 90, 239)"),
    map.set("gray", "rgb(150, 150, 150)");
  class Cursor {
    constructor() {
      (this.pos = { curr: null, prev: null }),
        (this.pt = []),
        this.create(),
        this.init(),
        this.render();
    }
    move(e, t) {
      (this.cursor.style.left = `${e}px`), (this.cursor.style.top = `${t}px`);
    }
    create() {
      this.cursor ||
        ((this.cursor = document.createElement("div")),
        (this.cursor.id = "cursor"),
        this.cursor.classList.add("hidden"),
        document.body.append(this.cursor));
      var e = document.getElementsByTagName("*");
      for (let t = 0; t < e.length; t++)
        "pointer" == getStyle2(e[t], "cursor") && this.pt.push(e[t].outerHTML);
      var t = map.get(localStorage.getItem("themeColor"));
      document.body.appendChild((this.scr = document.createElement("style"))),
        (this.scr.innerHTML =
          "* {cursor: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='1.0' fill='" +
          t +
          "'/></svg>\") 4 4, auto}");
    }
    refresh() {
      this.scr.remove(),
        this.cursor.classList.remove("hover"),
        this.cursor.classList.remove("active"),
        (this.pos = { curr: null, prev: null }),
        (this.pt = []),
        this.create(),
        this.init(),
        this.render();
    }
    init() {
      (document.onmouseover = (e) =>
        this.pt.includes(e.target.outerHTML) &&
        this.cursor.classList.add("hover")),
        (document.onmouseout = (e) =>
          this.pt.includes(e.target.outerHTML) &&
          this.cursor.classList.remove("hover")),
        (document.onmousemove = (e) => {
          null == this.pos.curr && this.move(e.clientX - 8, e.clientY - 8),
            (this.pos.curr = { x: e.clientX - 8, y: e.clientY - 8 }),
            this.cursor.classList.remove("hidden");
        }),
        (document.onmouseenter = (e) => this.cursor.classList.remove("hidden")),
        (document.onmouseleave = (e) => this.cursor.classList.add("hidden")),
        (document.onmousedown = (e) => this.cursor.classList.add("active")),
        (document.onmouseup = (e) => this.cursor.classList.remove("active"));
    }
    render() {
      this.pos.prev
        ? ((this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.15)),
          (this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.15)),
          this.move(this.pos.prev.x, this.pos.prev.y))
        : (this.pos.prev = this.pos.curr),
        requestAnimationFrame(() => this.render());
    }
  }
  CURSOR = new Cursor();
  var now = new Date();
  function createtime() {
    now.setTime(now.getTime() + 1e3);
    var e = new Date("08/01/2022 00:00:00"),
      t = Math.trunc(234e8 + ((now - e) / 1e3) * 17),
      n = (t / 1496e5).toFixed(6),
      o = new Date("08/09/2022 00:00:00"),
      a = (now - o) / 1e3 / 60 / 60 / 24,
      s = Math.floor(a),
      c = (now - o) / 1e3 / 60 / 60 - 24 * s,
      r = Math.floor(c);
    1 == String(r).length && (r = "0" + r);
    var i = (now - o) / 1e3 / 60 - 1440 * s - 60 * r,
      l = Math.floor(i);
    1 == String(l).length && (l = "0" + l);
    var d = (now - o) / 1e3 - 86400 * s - 3600 * r - 60 * l,
      b = Math.round(d);
    1 == String(b).length && (b = "0" + b);
    let u = "";
    (u =
      r < 18 && r >= 9
        ? `<img class='boardsign' src='https://sourcebucket.s3.bitiful.net/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${s} 天 ${r} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${n} 个天文单位 🚀</div>`
        : `<img class='boardsign' src='https://sourcebucket.s3.bitiful.net/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${s} 天 ${r} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${n} 个天文单位 🚀</div>`),
      document.getElementById("workboard") &&
        (document.getElementById("workboard").innerHTML = u);
  }
  function startFps() {
    var e =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (e) {
          window.setTimeout(e, 1e3 / 60);
        },
      t = 0,
      n = Date.now(),
      o = Date.now(),
      a = function () {
        var s = Date.now(),
          c = s - o,
          r = Math.round(1e3 / c);
        if (((o = s), t++, s > 1e3 + n)) {
          if ((r = Math.round((1e3 * t) / (s - n))) <= 5)
            var i = '<span style="color:#bd0000">卡成ppt🤢</span>';
          else if (r <= 15) i = '<span style="color:red">电竞级帧率😖</span>';
          else if (r <= 25) i = '<span style="color:orange">有点难受😨</span>';
          else if (r < 35) i = '<span style="color:#9338e6">不太流畅🙄</span>';
          else if (r <= 45) i = '<span style="color:#08b7e4">还不错哦😁</span>';
          else i = '<span style="color:#39c5bb">十分流畅😂</span>';
          (document.getElementById("fps").innerHTML = `FPS:${r} ${i}`),
            (t = 0),
            (n = s);
        }
        e(a);
      };
    a();
  }
  if (
    (setInterval(() => {
      createtime();
    }, 1e3),
    null == localStorage.getItem("reset_7"))
  ) {
    localStorage.setItem("reset_7", "1");
    for (var i = 1; i <= 6; i++) localStorage.removeItem("reset_" + i);
    initItem(),
      setTimeout(function () {
        new Vue({
          data: function () {
            this.$notify({
              title: "提示🍒",
              message:
                " (｡･∀･)ﾉﾞ由于网站部分设置项更新，当前已为您重置所有设置，祝您愉快！",
              position: "top-left",
              offset: 50,
              showClose: !0,
              type: "success",
              duration: 8e3,
            });
          },
        });
      }, 1500);
  }
  function initItem() {
    localStorage.setItem("blogbg", "default"),
      localStorage.setItem("universe", "block"),
      localStorage.setItem("fpson", "1"),
      localStorage.setItem("transNum", "98"),
      localStorage.setItem("font", "LXGW"),
      localStorage.setItem("themeColor", "green"),
      localStorage.setItem("rs", "block"),
      localStorage.setItem("mouse", "on"),
      localStorage.setItem("light", "true"),
      localStorage.setItem("snow", "none"),
      localStorage.setItem("aside", "1"),
      localStorage.setItem("asidePos", "1"),
      localStorage.setItem("nav", "1"),
      localStorage.setItem("bgFilterOn", "1");
    localStorage.setItem(
      "bgFilterVal",
      "blur(0px) saturate(115%) contrast(105%)"
    );
  }
  function setFont(e) {
    localStorage.setItem("font", e),
      "default" == e
        ? (document.documentElement.style.setProperty(
            "--global-font",
            "-apple-system"
          ),
          (document.body.style.fontFamily =
            "-apple-system, Consolas_1, BlinkMacSystemFont, 'Segoe UI' , 'Helvetica Neue' , Lato, Roboto, 'PingFang SC' , 'Microsoft JhengHei' , 'Microsoft YaHei' , sans-serif"))
        : (document.documentElement.style.setProperty("--global-font", e),
          (document.body.style.fontFamily =
            "var(--global-font),-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif"));
    try {
      setFontBorder();
    } catch (e) {}
  }
  function setFontBorder() {
    var e = "swf_" + localStorage.getItem("font");
    (document.getElementById(e).style.border = "2px solid var(--theme-color)"),
      Array.prototype.forEach.call(
        document.getElementsByClassName("swf"),
        function (t) {
          t.id != e && (t.style.border = "2px solid var(--border-color)");
        }
      );
  }
  function setColor(e) {
    (document.getElementById("themeColor").innerText =
      ":root{--theme-color:" + map.get(e) + " !important}"),
      localStorage.setItem("themeColor", e),
      CURSOR.refresh();
    var t = map.get(e),
      n = "rgba" + t.substring(3, t.length - 1) + ", 0.7)",
      o = "rgba" + t.substring(3, t.length - 1) + ", 0.5)",
      a = "rgba" + t.substring(3, t.length - 1) + ", 0.1)";
    document.documentElement.style.setProperty("--text-bg-hover", n),
      document.documentElement.style.setProperty("--high-trans-color", o),
      document.documentElement.style.setProperty("--hh-trans-color", a);
  }
  function setUniverse() {
    document.getElementById("universeSet").checked
      ? ((document.getElementById("universe").style.display = "block"),
        localStorage.setItem("universe", "block"))
      : ((document.getElementById("universe").style.display = "none"),
        localStorage.setItem("universe", "none"));
  }
  function setSnow() {
    document.getElementById("snowSet").checked
      ? ((document.getElementById("snow").style.display = "block"),
        localStorage.setItem("snow", "block"))
      : ((document.getElementById("snow").style.display = "none"),
        localStorage.setItem("snow", "none"));
  }
  function addNavClass() {
    "1" == localStorage.getItem("nav")
      ? (document.getElementById("nav").classList.add("nav_fixed"),
        document.getElementById("nav").classList.remove("nav_visible"),
        (document.getElementById("nav-display").innerText =
          ":root{--nav-visible-display:none;--nav-fixed-display:inline-flex;}"))
      : (document.getElementById("nav").classList.add("nav_visible"),
        document.getElementById("nav").classList.remove("nav_fixed"),
        (document.getElementById("nav-display").innerText =
          ":root{--nav-visible-display:inline-flex;--nav-fixed-display:none;}"));
  }
  function setNav() {
    document.getElementById("navSet").checked
      ? (document.getElementById("nav").classList.add("nav_fixed"),
        document.getElementById("nav").classList.remove("nav_visible"),
        (document.getElementById("nav-display").innerText =
          ":root{--nav-visible-display:none;--nav-fixed-display:inline-flex;}"),
        localStorage.setItem("nav", "1"))
      : (document.getElementById("nav").classList.add("nav_visible"),
        document.getElementById("nav").classList.remove("nav_fixed"),
        (document.getElementById("nav-display").innerText =
          ":root{--nav-visible-display:inline-flex;--nav-fixed-display:none;}"),
        localStorage.setItem("nav", "0"));
  }
  function fpssw() {
    document.getElementById("fpson").checked
      ? ((document.getElementById("fps").style.display = "block"),
        localStorage.setItem("fpson", "1"))
      : ((document.getElementById("fps").style.display = "none"),
        localStorage.setItem("fpson", "0"));
  }
  function reload() {
    window.location.reload();
  }
  function toggleRightside() {
    document.getElementById("rightSideSet").checked
      ? (localStorage.setItem("rs", "block"),
        (document.getElementById("rightSide").innerText =
          ":root{--rightside-display: block}"))
      : (localStorage.setItem("rs", "none"),
        (document.getElementById("rightSide").innerText =
          ":root{--rightside-display: none}"));
  }
  function setAside() {
    document.getElementById("asideSet").checked
      ? (localStorage.setItem("aside", "1"),
        (document.getElementById("aside-show").innerText =
          ":root{--layout-justify-content: unset; --aside-content-display: block;}"))
      : (localStorage.setItem("aside", "0"),
        (document.getElementById("aside-show").innerText =
          ":root{--layout-justify-content: center; --aside-content-display: none;}"));
  }
  function setAsidePos() {
    document.getElementById("asidePosSet").checked
      ? (localStorage.setItem("asidePos", "1"),
        (document.getElementById("aside-pos").innerText =
          ":root{--first-child-order: 0; --recent-post-item-margin: 0px 1% 20px 0px;}"))
      : (localStorage.setItem("asidePos", "0"),
        (document.getElementById("aside-pos").innerText =
          ":root{--first-child-order: 2; --recent-post-item-margin: 0px 0px 20px 1%;}"));
  }
  null == localStorage.getItem("font") && localStorage.setItem("font", "LXGW"),
    setFont(localStorage.getItem("font")),
    null == localStorage.getItem("themeColor") &&
      localStorage.setItem("themeColor", "green"),
    setColor(localStorage.getItem("themeColor")),
    null == localStorage.getItem("universe") &&
      localStorage.setItem("universe", "block"),
    (document.getElementById("universe").style.display =
      localStorage.getItem("universe")),
    null == localStorage.getItem("snow") && localStorage.setItem("snow", "none"),
    (document.getElementById("snow").style.display =
      localStorage.getItem("snow")),
    null == localStorage.getItem("nav") && localStorage.setItem("nav", "1"),
    document.addEventListener("pjax:complete", addNavClass),
    document.addEventListener("DOMContentLoaded", addNavClass),
    null == localStorage.getItem("fpson") && localStorage.setItem("fpson", "1"),
    startFps(),
    1 == localStorage.getItem("fpson")
      ? (document.getElementById("fps").style.display = "block")
      : (document.getElementById("fps").style.display = "none"),
    null == localStorage.getItem("rs") && localStorage.setItem("rs", "block"),
    "block" == localStorage.getItem("rs")
      ? (document.getElementById("rightSide").innerText =
          ":root{--rightside-display: block}")
      : (document.getElementById("rightSide").innerText =
          ":root{--rightside-display: none}"),
    null == localStorage.getItem("aside") && localStorage.setItem("aside", "1"),
    "1" == localStorage.getItem("aside")
      ? (document.getElementById("aside-show").innerText =
          ":root{--layout-justify-content: unset; --aside-content-display: block;}")
      : (document.getElementById("aside-show").innerText =
          ":root{--layout-justify-content: center; --aside-content-display: none;}"),
    null == localStorage.getItem("asidePos") &&
      localStorage.setItem("asidePos", "1"),
    "1" == localStorage.getItem("asidePos")
      ? (document.getElementById("aside-pos").innerText =
          ":root{--first-child-order: 0; --recent-post-item-margin: 0px 1% 20px 0px;}")
      : (document.getElementById("aside-pos").innerText =
          ":root{--first-child-order: 2; --recent-post-item-margin: 0px 0px 20px 1%;}"),
    null == localStorage.getItem("transNum") &&
      localStorage.setItem("transNum", 98);
  var curTransNum = localStorage.getItem("transNum"),
    curTransMini = 0.95 * curTransNum;
  function setTrans() {
    var e = document.getElementById("transSet").value;
    (document.querySelector(".transValue").innerHTML =
      '卡片透明度 (0%-100%): <span style="color:#eb5353">' + e + "%</span>"),
      localStorage.setItem("transNum", e),
      (curTransMini = 0.95 * e),
      (curTransNum = e),
      (document.querySelector("#rang_trans").style.width = curTransMini + "%"),
      (document.getElementById(
        "transPercent"
      ).innerText = `:root{--trans-light: rgba(250, 250, 250, ${e}%) !important; --trans-dark: rgba(28, 28, 28, ${e}%) !important} `);
  }
  (document.getElementById(
    "transPercent"
  ).innerText = `:root{--trans-light: rgba(250, 250, 250, ${curTransNum}%) !important; --trans-dark: rgba(28, 28, 28, ${curTransNum}%) !important} `),
    null == localStorage.getItem("lastTime") &&
      localStorage.setItem("lastTime", Date.now() - 2916e4);
  let deltaSeconds = (Date.now() - localStorage.getItem("lastTime")) / 1e3;
  if (deltaSeconds > 28800) {
    localStorage.setItem("lastTime", Date.now());
    var curHour = new Date().getHours(),
      curMode = document
        .getElementsByTagName("html")[0]
        .getAttribute("data-theme");
    (curHour >= 19 || curHour < 7) && "dark" != curMode
      ? (activateDarkMode(),
        saveToLocal.set("theme", "dark", 2),
        document
          .getElementById("modeicon")
          .setAttribute("xlink:href", "#icon-sun"))
      : curHour >= 7 &&
        curHour < 19 &&
        "light" != curMode &&
        (activateLightMode(),
        saveToLocal.set("theme", "light", 2),
        document.querySelector("body").classList.add("DarkMode"),
        document
          .getElementById("modeicon")
          .setAttribute("xlink:href", "#icon-moon"));
  }
  var defineColor =
    localStorage.getItem("blogbg") &&
    "#" == localStorage.getItem("blogbg").charAt(0)
      ? localStorage.getItem("blogbg")
      : "#F4D88A";
  function changeBgColor() {
    changeBg(document.querySelector("#define_colors").value);
  }
  let bingDayBg =
      screen.width <= 768
        ? "url(https://bing.img.run/m.php)"
        : "url(https://bing.img.run/1920x1080.php)",
    bingHistoryBg =
      screen.width <= 768
        ? "url(https://bing.img.run/rand_m.php)"
        : "url(https://bing.img.run/rand.php)",
    EEEDog = "url(https://api.yimian.xyz/img?type=moe&size=1920x1080)",
    seovx = "url(https://cdn.seovx.com/?mom=302)",
    picsum = "url(https://picsum.photos/1920/1080.webp)",
    waiBizhi = "url(https://api.ixiaowai.cn/gqapi/gqapi.php)",
    btstu = "url(http://api.btstu.cn/sjbz/?lx=suiji)",
    unsplash = "url(https://source.unsplash.com/random/1920x1080/)";
  function resetBg_() {
    document.getElementById("defineBg").innerText =
      ":root{\n    --default-bg: url(https://cdn.skypro.cartafi.cn/2023/04/20/home_bg.webp);\n    --darkmode-bg:url(https://cdn.skypro.cartafi.cn/2023/04/20/dark_mode.webp);\n    --mobileday-bg: url(https://cdn.skypro.cartafi.cn/2023/04/20/snow.webp);\n    --mobilenight-bg: url(https://cdn.skypro.cartafi.cn/2023/04/20/mb8.webp);\n  }";
  }
  function changeBg(e) {
    (defineColor = "#" == e.charAt(0) ? e : "#F4D88A"),
      setBg(e),
      localStorage.setItem("blogbg", e);
  }
  function setBg(e) {
    document.getElementById(
      "defineBg"
    ).innerText = `:root{\n    --default-bg: ${e};\n    --darkmode-bg: ${e};\n    --mobileday-bg: ${e};\n    --mobilenight-bg: ${e};\n  }`;
  }
  function getPicture() {
    debounce(getPicture_, 300);
  }
  function getPicture_() {
    checkImgExists(document.getElementById("pic-link").value)
      .then(() => {
        changeBg("url(" + document.getElementById("pic-link").value + ")"),
          new Vue({
            data: function () {
              this.$notify({
                title: "可以啦🍨",
                message: "切换自定义背景成功！",
                position: "top-left",
                offset: 50,
                showClose: !0,
                type: "success",
                duration: 5e3,
              });
            },
          });
      })
      .catch(() => {
        new Vue({
          data: function () {
            this.$notify({
              title: "链接不对🤣",
              message: "请输入有效的图片链接！",
              position: "top-left",
              offset: 50,
              showClose: !0,
              type: "warning",
              duration: 5e3,
            });
          },
        });
      });
  }
  function checkImgExists(e) {
    return new Promise(function (t, n) {
      var o = new Image();
      (o.src = e),
        (o.onload = function (e) {
          t(e);
        }),
        (o.onerror = function (e) {
          n(e);
        });
    });
  }
  function setLight() {
    document.getElementById("lightSet").checked
      ? (changeLight(!0), localStorage.setItem("light", "true"))
      : (changeLight(!1), localStorage.setItem("light", "false"));
  }
  function changeLight(e) {
    document.getElementById("site-name") &&
      (document.getElementById("site-name").style.animation = e
        ? "light_15px 10s linear infinite"
        : "none"),
      document.getElementById("site-title") &&
        (document.getElementById("site-title").style.animation = e
          ? "light_15px 10s linear infinite"
          : "none"),
      document.getElementById("site-subtitle") &&
        (document.getElementById("site-subtitle").style.animation = e
          ? "light_10px 10s linear infinite"
          : "none"),
      document.getElementById("post-info") &&
        (document.getElementById("post-info").style.animation = e
          ? "light_5px 10s linear infinite"
          : "none"),
      (document.getElementById("menu_shadow").innerText = e
        ? ":root{--menu-shadow: 0 0 1px var(--theme-color);}"
        : ":root{--menu-shadow: none;}");
  }
  var blurRadius, saturate, contrast;
  null == localStorage.getItem("blogbg") ||
  "default" == localStorage.getItem("blogbg")
    ? (resetBg_(),
      null == localStorage.getItem("blogbg") &&
        localStorage.setItem("blogbg", "default"))
    : setBg(localStorage.getItem("blogbg")),
    null == localStorage.getItem("light") &&
      localStorage.setItem("light", "true"),
    document.addEventListener("pjax:complete", function () {
      changeLight("true" == localStorage.getItem("light"));
    }),
    document.addEventListener("DOMContentLoaded", function () {
      changeLight("true" == localStorage.getItem("light"));
    }),
    null == localStorage.getItem("bgFilterVal") &&
      localStorage.setItem(
        "bgFilterVal",
        "blur(0px) saturate(115%) contrast(105%)"
      );
  var strs = localStorage.getItem("bgFilterVal").split(" ");
  function saveBgFilter() {
    if (
      document.getElementById("blurRad").value < 0 ||
      document.getElementById("blurRad").value > 300 ||
      document.getElementById("saturation").value < 0 ||
      document.getElementById("saturation").value > 200 ||
      document.getElementById("contrast").value < 0 ||
      document.getElementById("contrast").value > 200
    )
      new Vue({
        data: function () {
          this.$notify({
            title: "警告💊",
            message: "背景滤镜参数不在合理范围内！",
            position: "top-left",
            offset: 50,
            showClose: !0,
            type: "warning",
            duration: 5e3,
          });
        },
      });
    else {
      var e =
        "blur(" +
        document.getElementById("blurRad").value +
        "px) saturate(" +
        document.getElementById("saturation").value +
        "%) contrast(" +
        document.getElementById("contrast").value +
        "%)";
      localStorage.setItem("bgFilterVal", e),
        "1" == localStorage.getItem("bgFilterOn") &&
          (document.getElementById("bgFilterParam").innerText =
            ":root{--bg-filter:" + localStorage.getItem("bgFilterVal") + ";}"),
        (blurRadius = document.getElementById("blurRad").value),
        (saturate = document.getElementById("saturation").value),
        (contrast = document.getElementById("contrast").value),
        (document.getElementById("bgFilterShow").innerHTML =
          '模糊半径: <span style="color:#eb5353">' +
          blurRadius +
          'px</span> | 饱和度: <span style="color:#eb5353">' +
          saturate +
          '%</span> | 对比度: <span style="color:#eb5353">' +
          contrast +
          "%</span>"),
        new Vue({
          data: function () {
            this.$notify({
              title: "提示🍄",
              message: "设置背景滤镜参数成功！",
              position: "top-left",
              offset: 50,
              showClose: !0,
              type: "success",
              duration: 5e3,
            });
          },
        });
    }
  }
  function setBgFilter() {
    document.getElementById("bgFilterSet").checked
      ? ((document.getElementById("bgFilterParam").innerText =
          ":root{--bg-filter:" + localStorage.getItem("bgFilterVal") + ";}"),
        localStorage.setItem("bgFilterOn", "1"))
      : ((document.getElementById("bgFilterParam").innerText =
          ":root{--bg-filter:none;}"),
        localStorage.setItem("bgFilterOn", "0"));
  }
  (blurRadius = strs[0].substring(5, strs[0].length - 3)),
    (saturate = strs[1].substring(9, strs[1].length - 2)),
    (contrast = strs[2].substring(9, strs[2].length - 2)),
    null == localStorage.getItem("bgFilterOn") &&
      localStorage.setItem("bgFilterOn", "1"),
    "0" == localStorage.getItem("bgFilterOn")
      ? (document.getElementById("bgFilterParam").innerText =
          ":root{--bg-filter:none;}")
      : (document.getElementById("bgFilterParam").innerText =
          ":root{--bg-filter:" + localStorage.getItem("bgFilterVal") + ";}");
  var winbox = "";
  function createWinbox() {
    let e = document.createElement("div");
    document.body.appendChild(e),
      (winbox = WinBox({
        id: "meihuaBox",
        index: 99,
        title: "美化设置",
        x: "left",
        y: "center",
        minwidth: "300px",
        height: "60%",
        background: "var(--theme-color)",
        onmaximize: () => {
          e.innerHTML =
            "<style>body::-webkit-scrollbar {display: none;} div#meihuaBox {width: 100% !important;}</style>";
        },
        onrestore: () => {
          e.innerHTML = "";
        },
      })),
      winResize(),
      window.addEventListener("resize", winResize),
      (winbox.body.innerHTML = `  <div class="settings" style="display: block;">
      <div id="article-container" style="padding:12px;">
      <br>
      <center><p><button id="reset_btn" onclick="debounce(reset, 300)" style="background:linear-gradient(to right, #fc354c, #0abfbc);display:block;width:40%;padding:15px 0;border-radius:30px;color:white;font-size:1.1em;" title="点击此按钮恢复美化模块默认设置"><i class="fa-solid fa-arrows-rotate" style="animation: fa-spin 8s linear infinite;"></i>&nbsp;恢复默认设置</button></p></center>
      
      <h2>一、显示偏好</h2>
      
      <div class="transValue" id="transVal" style="font-weight:bold;padding-left:10px">卡片透明度 (0%-100%): <span style="color:#eb5353">${curTransNum}%</span></div>
      <div class="range">
      <input id="transSet" type="range" min="0" max="100" step="1" value=${curTransNum} oninput="setTrans()">
      <p class="rang_width" id="rang_trans" style="width:${curTransMini}%"></p>
      </div>
      
      
      <div style="padding-bottom:15px">
      <div class="content" style="display:flex">
      <div class="content-text" style="font-weight:bold; padding-left:10px; "> 背景滤镜 </div><input type="checkbox" id="bgFilterSet" onclick="setBgFilter()">
      <div class="bgFilterValue" id="bgFilterShow" style="font-weight:bold;padding-left:10px">模糊半径: <span style="color:#eb5353">${blurRadius}px</span> | 饱和度: <span style="color:#eb5353">${saturate}%</span> | 对比度: <span style="color:#eb5353">${contrast}%</span></div>
      </div>
      <div class="content" style="display:flex;font-weight:bold;padding-left:10px">
      模糊半径：<input type="number" id="blurRad" placeholder="0" min="0" max="300" step="1" title="背景模糊半径:0-300px">&nbsp;px&nbsp;&nbsp;饱和度：<input type="number" id="saturation" placeholder="115" min="0" max="200" step="1" title="背景饱和度:0-200%">&nbsp;%&nbsp;&nbsp;对比度：<input type="number" id="contrast" placeholder="105" min="0" max="200" step="1" title="背景对比度:0-200%">&nbsp;%&nbsp;&nbsp;
      <button class="winbox_btn" type="button" onclick="debounce(saveBgFilter,300)" style="background:var(--theme-color);width:48px;border-radius:6px;color:white;line-height:1.2;height:28px;margin-top:2px;" title="点击保存背景滤镜参数">保存</button>
      </div>
      </div>
      
      <div class="content" style="display:flex">
      <div class="content-text" style="font-weight:bold; padding-left:10px"> 星空特效 (夜间模式) </div><input type="checkbox" id="universeSet" onclick="setUniverse()">
      <div class="content-text" style="font-weight:bold; padding-left:20px"> 霓虹彩灯 (夜间模式) </div><input type="checkbox" id="lightSet" onclick="setLight()">
      </div>
      
      <div class="content" style="display:flex">
      <div class="content-text" style="font-weight:bold; padding-left:10px"> 帧率监测 (默认开启) </div><input type="checkbox" id="fpson" onclick="fpssw()">
      <div class="content-text" style="font-weight:bold; padding-left:20px"> 雪花特效 (白天模式) </div><input type="checkbox" id="snowSet" onclick="setSnow()">
      </div>
      
      <div class="content" style="display:flex">
      <div class="content-text" style="font-weight:bold; padding-left:10px"> 右侧部件 (默认开启) </div><input type="checkbox" id="rightSideSet" onclick="toggleRightside()">
      <div class="content-text" style="font-weight:bold; padding-left:20px"> 顶栏常驻 (默认开启) </div><input type="checkbox" id="navSet" onclick="setNav()">
      </div>
      
      <div class="content" style="display:flex">
      <div class="content-text" style="font-weight:bold; padding-left:10px"> 侧栏显隐 (默认显示) </div><input type="checkbox" id="asideSet" onclick="setAside()">
      <div class="content-text" style="font-weight:bold; padding-left:20px"> 侧栏位置 (默认右边) </div><input type="checkbox" id="asidePosSet" onclick="setAsidePos()">
      </div>
      
      <h2>二、主题色设置</h2>
      <div class="content" style="display:flex;padding-left:12px;">
      <input type="radio" id="red" name="colors" value=" " onclick="setColor('red')">
      <input type="radio" id="orange" name="colors" value=" " onclick="setColor('orange')">
      <input type="radio" id="yellow" name="colors" value=" " onclick="setColor('yellow')">
      <input type="radio" id="green" name="colors" value=" " onclick="setColor('green')">
      <input type="radio" id="blue" name="colors" value=" " onclick="setColor('blue')">
      <input type="radio" id="heoblue" name="colors" value=" " onclick="setColor('heoblue')">
      <input type="radio" id="darkblue" name="colors" value=" " onclick="setColor('darkblue')">
      <input type="radio" id="purple" name="colors" value=" " onclick="setColor('purple')">
      <input type="radio" id="pink" name="colors" value=" " onclick="setColor('pink')">
      <input type="radio" id="black" name="colors" value=" " onclick="setColor('black')">
      </div>
      
      <h2>三、字体设置</h2>
      <div class="note warning modern"><p>非商免字体未经授权只能个人使用。本站为完全非商业、非盈利性质的网站，平时用于个人学习交流，如有侵权请联系站长删除，谢谢！ —— 致版权方</p>
      </div>
      <p id="swfs">
      <a class="swf" id="swf_ZhuZiAWan" href="javascript:;" rel="noopener external nofollow" style="font-family:'ZhuZiAWan'!important;color:#303030" onclick="setFont('ZhuZiAWan')">筑紫A丸标准体2.0</a>
      <a class="swf" id="swf_HYTMR" href="javascript:;" rel="noopener external nofollow" style="font-family:'HYTMR'!important;color:#303030" onclick="setFont('HYTMR')">汉仪唐美人</a>
      <a class="swf" id="swf_LXGW" href="javascript:;" rel="noopener external nofollow" style="font-family:'LXGW'!important;color:#303030" onclick="setFont('LXGW')">霞鹜文楷</a>
      <a class="swf" id="swf_TTQHB" href="javascript:;" rel="noopener external nofollow" style="font-family:'TTQHB'!important;color:#303030" onclick="setFont('TTQHB')">甜甜圈海报</a>
      <a class="swf" id="swf_YSHST" href="javascript:;" rel="noopener external nofollow" style="font-family:'YSHST'!important;color:#303030" onclick="setFont('YSHST')">优设好身体</a>
      <a class="swf" id="swf_MiSans" href="javascript:;" rel="noopener external nofollow" style="font-family:'MiSans'!important;color:#303030" onclick="setFont('MiSans')">MiSans</a>
      <a class="swf" id="swf_default" href="javascript:;" rel="noopener external nofollow" style="font-family:-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif;!important;color:#303030" onclick="setFont('default')">系统默认</a>
      </p>
      
      <h2>四、背景设置</h2>
      <center><button class="winbox_btn" onclick="debounce(resetBg, 300)" style="background:var(--theme-color);display:block;width:35%;padding:15px 0;border-radius:30px;color:white;" title="点击此按钮恢复网站默认背景"><i class="fa-solid fa-arrows-rotate" style="animation: fa-spin 8s linear infinite;"></i>&nbsp;恢复默认背景</button></center>
      
      <h3>1. 二次元</h3>
      <details class="folding-tag" cyan><summary> 查看二次元背景 </summary>
                  <div class='content'>
                  <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/yuanshen1.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/yuanshen1.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/dm15.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/dm15.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/dm2.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/dm2.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/dm7.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/dm7.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/dm8.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/dm8.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/dm3.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/dm3.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/dm11.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/dm11.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/dm12.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/dm12.webp)')"></a></div>
                  </div>
                </details>
        
        
      <h3>2. 风景</h3>  
      <details class="folding-tag" cyan><summary> 查看风景背景 </summary>
                <div class='content'>
                  <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/fj1.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/fj1.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/fj2.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/fj2.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/fj3.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/fj3.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/fj4.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/fj4.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/fj5.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/fj5.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/fj6.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/fj6.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/fj7.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/fj7.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/fj8.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/fj8.webp)')"></a></div>
                  </div>
                </details>
      
                
      <h3>3. 萌宠</h3>  
      <details class="folding-tag" cyan><summary> 查看萌宠背景 </summary>
                  <div class='content'>
                  <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mc1.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mc1.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mc2.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mc2.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mc3.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mc3.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mc4.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mc4.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mc5.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mc5.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mc6.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mc6.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mc7.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mc7.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mc8.webp)" class="imgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mc8.webp)')"></a></div>
                  </div>
                </details>
      
                
      <h3>4. 渐变色</h3>
      <details class="folding-tag" cyan><summary> 查看渐变色背景 </summary>
                  <div class='content'>
                  <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #544a7d, #ffd452)" onclick="changeBg('linear-gradient(to right, #544a7d, #ffd452)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)" onclick="changeBg('linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to left, #654ea3, #eaafc8)" onclick="changeBg('linear-gradient(to left, #654ea3, #eaafc8)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)" onclick="changeBg('linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #d3959b, #bfe6ba)" onclick="changeBg('linear-gradient(to top, #d3959b, #bfe6ba)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #8360c3, #2ebf91)" onclick="changeBg('linear-gradient(to top, #8360c3, #2ebf91)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #108dc7, #ef8e38)" onclick="changeBg('linear-gradient(to top, #108dc7, #ef8e38)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)" onclick="changeBg('linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)')"></a></div>
                  </div>
                </details>
        
        
      <h3>5. 纯色</h3>
      <details class="folding-tag" cyan><summary> 查看纯色背景 </summary>
                  <div class='content'>
                  <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ecb1b1" onclick="changeBg('#ecb1b1')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #d3ebac" onclick="changeBg('#d3ebac')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ace9ce" onclick="changeBg('#ace9ce')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #c1ebea" onclick="changeBg('#c1ebea')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #dee7f1" onclick="changeBg('#dee7f1')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #e9e3f2" onclick="changeBg('#e9e3f2')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #f7eff5" onclick="changeBg('#f7eff5')"></a>  <input type="color" id="define_colors" href="javascript:;" rel="noopener external nofollow" class="box" autocomplete="on" value="${defineColor}" oninput="changeBgColor()"></input></div>
                  </div>
                </details>
        
        
        
      <h3>6. 适配手机</h3>
      <details class="folding-tag" cyan><summary> 查看适配手机的背景 </summary>
                  <div class='content'>
                  <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mb4.webp)" class="pimgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mb4.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mb5.webp)" class="pimgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mb5.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mb6.webp)" class="pimgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mb6.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mb7.webp)" class="pimgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mb7.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mb8.webp)" class="pimgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mb8.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mb9.webp)" class="pimgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mb9.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mb16.webp)" class="pimgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mb16.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.skypro.cartafi.cn/2023/04/20/mb19.webp)" class="pimgbox" onclick="changeBg('url(https://cdn.skypro.cartafi.cn/2023/04/20/mb19.webp)')"></a></div>
                  </div>
                </details>
        
        
      <h3>8. 自定义背景</h3>
      <details class="folding-tag" cyan><summary> 设置自定义背景 </summary>
                  <div class='content'>
                      <p><center><input type="text" id="pic-link" size="70%" maxlength="1000" placeholder="请输入有效的图片链接，如 https://source.fomal.cc/img/home_bg.webp"></center></p><p><center><button class="winbox_btn" type="button" onclick="getPicture()" style="background:var(--theme-color);width:35%;padding: 5px 0px 7px 0px;border-radius:30px;color:white;line-height:2;">🌈切换背景🌈</button></center></p>
                      </div>
                    </details>
                
      <br>
      <center><div style="font-size:1.2em;color:var(--theme-color);font-weight:bold;">------ ( •̀ ω •́ )y 到底啦 ------</div></center>
      <br>
            
      </div>
                
      </div>`),
      (document.getElementById(localStorage.getItem("themeColor")).checked = !0),
      "1" == localStorage.getItem("bgFilterOn")
        ? (document.getElementById("bgFilterSet").checked = !0)
        : "0" == localStorage.getItem("bgFilterOn") &&
          (document.getElementById("bgFilterSet").checked = !1),
      (document.getElementById("blurRad").value = blurRadius),
      (document.getElementById("saturation").value = saturate),
      (document.getElementById("contrast").value = contrast),
      "block" == localStorage.getItem("universe")
        ? (document.getElementById("universeSet").checked = !0)
        : "none" == localStorage.getItem("universe") &&
          (document.getElementById("universeSet").checked = !1),
      "1" == localStorage.getItem("fpson")
        ? (document.getElementById("fpson").checked = !0)
        : (document.getElementById("fpson").checked = !1),
      "block" == localStorage.getItem("rs")
        ? (document.getElementById("rightSideSet").checked = !0)
        : "none" == localStorage.getItem("rs") &&
          (document.getElementById("rightSideSet").checked = !1),
      "true" == localStorage.getItem("light")
        ? (document.getElementById("lightSet").checked = !0)
        : (document.getElementById("lightSet").checked = !1),
      setFontBorder(),
      "block" == localStorage.getItem("snow")
        ? (document.getElementById("snowSet").checked = !0)
        : "none" == localStorage.getItem("snow") &&
          (document.getElementById("snowSet").checked = !1),
      "1" == localStorage.getItem("nav")
        ? (document.getElementById("navSet").checked = !0)
        : "0" == localStorage.getItem("nav") &&
          (document.getElementById("navSet").checked = !1),
      "1" == localStorage.getItem("aside")
        ? (document.getElementById("asideSet").checked = !0)
        : "0" == localStorage.getItem("aside") &&
          (document.getElementById("asideSet").checked = !1),
      "1" == localStorage.getItem("asidePos")
        ? (document.getElementById("asidePosSet").checked = !0)
        : "0" == localStorage.getItem("asidePos") &&
          (document.getElementById("asidePosSet").checked = !1);
  }
  function resetBg() {
    localStorage.setItem("blogbg", "deafult"),
      resetBg_(),
      new Vue({
        data: function () {
          this.$notify({
            title: "提示🌰",
            message: "当前已经恢复为默认背景！",
            position: "top-left",
            offset: 50,
            showClose: !0,
            type: "success",
            duration: 5e3,
          });
        },
      });
  }
  function reset() {
    initItem(),
      setFont("LXGW"),
      setColor("green"),
      (document.getElementById("universe").style.display = "block"),
      (document.getElementById("snow").style.display = "none"),
      (document.getElementById("aside-show").innerText =
        ":root{--layout-justify-content: unset; --aside-content-display: block;}"),
      (document.getElementById("aside-pos").innerText =
        ":root{--first-child-order: 0; --recent-post-item-margin: 0px 1% 20px 0px;}"),
      document.getElementById("nav").classList.add("nav_fixed"),
      document.getElementById("nav").classList.remove("nav_visible"),
      (document.getElementById("nav-display").innerText =
        ":root{--nav-visible-display:none;--nav-fixed-display:inline-flex;}"),
      (document.getElementById("rightSide").innerText =
        ":root{--rightside-display: block}"),
      (document.getElementById("fps").style.display = "block"),
      (curTransMini = 0.95 * (curTransNum = 98)),
      (document.getElementById(
        "transPercent"
      ).innerText = `:root{--trans-light: rgba(250, 250, 250, ${curTransNum}%) !important; --trans-dark: rgba(28, 28, 28, ${curTransNum}%) !important} `),
      resetBg_(),
      changeLight(!0),
      (document.getElementById("green").checked = !0),
      (document.getElementById("universeSet").checked = !0),
      (document.getElementById("fpson").checked = !0),
      (document.getElementById("rightSideSet").checked = !0),
      (document.getElementById("lightSet").checked = !0),
      (document.getElementById("snowSet").checked = !1),
      (document.getElementById("navSet").checked = !0),
      (document.getElementById("asideSet").checked = !0),
      (document.getElementById("asidePosSet").checked = !0),
      (document.getElementById("bgFilterSet").checked = !0),
      (document.getElementById("blurRad").value = 0),
      (document.getElementById("saturation").value = 115),
      (document.getElementById("contrast").value = 105),
      (document.getElementById("bgFilterShow").innerHTML =
        '模糊半径: <span style="color:#eb5353">0px</span> | 饱和度: <span style="color:#eb5353">115%</span> | 对比度: <span style="color:#eb5353">105%</span>'),
      (document.getElementById("bgFilterParam").innerText =
        ":root{--bg-filter:" + localStorage.getItem("bgFilterVal") + ";}"),
      (document.getElementById("transVal").innerHTML =
        '卡片透明度 (0%-100%): <span style="color:#eb5353">' +
        curTransNum +
        "%</span>"),
      (document.getElementById("transSet").value = `${curTransNum}`),
      (document.getElementById("rang_trans").style = `width:${curTransMini}%`),
      new Vue({
        data: function () {
          this.$notify({
            title: "提示🍅",
            message: "当前已经恢复为默认设置！",
            position: "top-left",
            offset: 50,
            showClose: !0,
            type: "success",
            duration: 5e3,
          });
        },
      });
  }
  function winResize() {
    try {
      var e = document.documentElement.clientWidth;
      e <= 768
        ? winbox.resize(0.95 * e + "px", "90%").move("center", "center")
        : winbox.resize(0.6 * e + "px", "70%").move("center", "center");
    } catch (e) {}
  }
  function toggleWinbox() {
    document.querySelector("#meihuaBox")
      ? winbox.toggleClass("hide")
      : createWinbox();
  }
  