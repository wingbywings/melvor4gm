$(()=> {
    let param = {
        tag: true,
        num: 1,
        ele: document.createElement('div'),
        menu1: 'Timer', //'&#xe6a2;',
        menu2: 'XP', //'&#xe643;',
        menu0: 'GM', //'&#xe627;',
        menu3: 'PoolXP', //'&#xe644;',
        closeIcon: 'close', //'&#xe628;',
        distance: '500',
        css: "position:fixed;" +
        "bottom:4rem;" +
        "box-shadow:1px 1px 1px gray;" +
        "right:10px;" +
        "font-size:0.6rem;" +
        "color:#fff;" +
        "z-index:1000;" +
        "height:1.5rem;" +
        "width:2.5rem;" +
        "background:#f44336;" +
        "border-radius:5%;" +
        "line-height:1.5rem;" +
        "text-align:center",
        menuCss: "position:absolute;" +
        // "bottom:3rem;" +
        "display:none;" +
        "box-shadow:1px 1px 1px gray;" +
        "font-size:0.6rem;" +
        "color:#fff;" +
        "background:orange;" +
        "height:1.5rem;" +
        "width:2.5rem;" +
        "border-radius:5%;" +
        "text-align:center;" +
        "line-height:1.5rem;"
        // type: '#top'
    };
    {
        document.querySelector('body').appendChild(((ele)=> {
            ele.className = 'scroll iconfont';
            ele.innerHTML = param.menu0;
            // ele.href = param.type;
            ele.style.cssText = param.css;
            for (let i = 0; i < 3; i++) {
                let menu_personal = document.createElement('a');
                menu_personal.className = 'iconfont';
                menu_personal.style.cssText = param.menuCss;
                switch (i) {
                    case 0:
                        setStyle(menu_personal, '#2196f3', '2.4rem', '2.4rem', param.menu2, 'menu2');
                        break;
                    case 1:
                        setStyle(menu_personal, '#4caf50', 0, '3.5rem', param.menu3, 'menu3');
                        break;
                    case 2:
                        setStyle(menu_personal, '#fdd835', '3.5rem', '0', param.menu1, 'menu1');
                        break;

                }
                param.ele.appendChild(menu_personal);
            }
            return ele;
        })(param.ele));
        function setStyle(ele, ...args) {
            ele.style.background = args[0];
            ele.style.bottom = args[1];
            ele.style.right = args[2];
            ele.innerHTML = args[3];
            ele.id = args[4];
        }
    }
    {
        // $(window).scroll(()=> {
        //     var scrollValue = $(window).scrollTop();
        //     if (scrollValue > param.distance) {
        //         if (param.tag) {
        //             $(param.ele).css('display', 'block').animateCss('fadeInRight');
        //             param.tag = !param.tag;
        //         }
        //     } else {
        //         if (!param.tag) {
        //             $(param.ele).css('display', 'none');
        //             $(param.ele).children().css('display', 'none');
        //             param.num++;
        //             param.tag = !param.tag;
        //         }
        //     }
        // });
        $(param.ele).click((e)=> {
            window.e = e;
            if (param.num % 2 != 0) {
                if (!window.game || !window.game.activeAction) {
                    alert('请先激活一项活动');
                    return;
                }
            }
            action = window.game.activeAction;
            switch (e.target.id) {
                case 'menu2':
                    console.log('XP');
                    window.prompt('请输入想要增加的经验值','1000',function(xp){action.addXP(xp+0);});
                    break;
                case 'menu3':
                    console.log('PoolXP');
                    window.prompt('请输入想要增加的技能池经验','1000',function(xp){action.addMasteryPoolXP(xp+0);});
                    break;
                case 'menu1':
                    console.log('timer');
                    Object.defineProperty(action, "actionInterval", { get: function () { return 500;}});
                    break;
            }
            param.num % 2 == 0 && $(param.ele).children().css('display', 'none') || $(param.ele).children().css('display', 'block');
            param.num++;
        })
    }
});
