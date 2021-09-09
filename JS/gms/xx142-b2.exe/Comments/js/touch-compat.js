


var callees = [];
  var callers = [];
  var i = 1; maximum_calls = 1000;
  //i - это счетчик по количеству функций в sc
  //maximum_calls это то, на каком вызове underevery
  //будет напечатан результат
  //такой способ предпочтителен, но
  //если выбрать число больше, чем всего вызовов
  //то ничего не будет напечатано




  function returnMyName(cal) {
     // console.log(cal);
    if (cal.name) return cal.name
    for (var o in this) {
      if (cal == this[o]) {
     if (o) return o;
     }
    }
    return 'IIFE'
  };


  function underEvery(cal) {
   

if (i<=maximum_calls) {

callees.push(returnMyName.call(this, cal));
  
 if ((typeof cal === 'function') && (cal.prototype.constructor === cal) && (!cal.caller)) {  
   
  let gaps = [];
   
  
       for (let k in window) {
          if (window[k] instanceof cal) {
            var q=k;
            //? почему он у меня сразу находит нужную(последнюю)
          }
        }
        if (q == undefined) callers.push(['(var)', "Window"] );       
        //если это первый вызов класса и переменная,
        //откуда он вызывается (caller) - еще не появилась
        //или если это функция, которая вызывается из window
        else callers.push(['(var)',q]);
        //пишем переменную откуда вызвался класс
   
   
   
   
   
      //далее передвигаем "дырку"
        for (let i = 0; i < callers.length; i++) {
        // по всем элементам вообще
        if ((callers[i][0] == '(var)') && (callers[i][1] != "Window")) {
       //отметили нужный элемент
        for (let k = 0; k < i; k++) {
        //по всем элементам от начала до i
        if ((callers[k][0] == '(var)') && (callers[k][1] == "Window")) {
        //отметили все "Window"
        gaps.push(k)
        //забили все индексы верхних "Window" в массив
        }}}
        for (let j = 0; j < gaps.length; j++) {
         //проходим по каждому внешнему "Window"
         if (callees[gaps[j]] == 'IIFE') continue
         //пропускаем функции IIFE (они все равно не имеют instances)
      if (window[callers[i][1]] instanceof window[callees[gaps[j]]])  {                
     //если 
        callers[i] = [callers[gaps[j]], callers[gaps[j]] = callers[i]][0];          
    //поменяли "Window" и caller хитрым способом
       break;
      //мы уже поменяли caller с верхней "Window", дальше нет смысла
        }}}
   
   
   
   
 }
   
   
   //переменная вызывающая ф-ю(в частности класс) callee не является caller
   //caller это функция из который вызывается callee
   //здесь мы вызываем (или чего хотим добиться) класс из переменной в window
   //а переменную (она будет вместо caller) вытягиваем из window
   //но мы увидим эту переменную только в следующем вызове этого класса
   // => в этом вызове он покажет пред.переменную, а в самом первом - "Window"
   //эта "Window" - "дырка, которую надо переместить в последний элемент среди таких "переменных" в "callers"
   
  else callers.push(['(func)',returnMyName.call(this, cal.caller = cal.caller || Window)]);  
  //console.log(returnMyName.call(this,cal.caller))
       }

    //  if ((sc.indexOf("stop")==-1)) {
    // sc.push(returnMyName.call(this, cal.caller)+" ------- "+returnMyName.call(this, cal));
    //  if (this.nipples[0]) {
    //      sc.push("stop"); console.log(sc); console.log(this.nipples[0])}};

    //но здесь в классах вызов надо вставлять а конце
if ((i==maximum_calls)){
 for (let j=0; j<callees.length; j++) console.log(callers[j]+'----'+callees[j])
}
i += 1;
//увеличиваем счётчик после каждого вызова
}




// Converts Touch events to Mouse Events

var TouchCompat = {
  supported: (
    ('ontouchstart' in document) ||
    (window.DocumentTouch && document instanceof window.DocumentTouch) ||
    (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0) || //IE 10
    (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0) || //IE >=11
    false
  ),
  //если поддерживается один из этих атрибутов
  init: function () {
    underEvery.call(this, arguments.callee);
    
    //отдельный файл js это модуль
    //функция init прописана так, чтобы ее можно было вызвать
    //из другого модуля
    if (TouchCompat.supported) {
      document.addEventListener("touchstart", touchHandler, true);
      document.addEventListener("touchmove", touchHandler, true);
      document.addEventListener("touchend", touchHandler, true);
      document.addEventListener("touchcancel", touchHandler, true);
    }

    function touchHandler(event) {
      underEvery.call(this, arguments.callee);
    
      var touches = event.changedTouches,
      first = touches[0],
      type = "";
      switch (event.type) {
        case "touchstart": {
          type = "mousedown"; break;
        }
          case "touchmove": {
            type = "mousemove"; break;
          }
            case "touchend": {
              type = "mouseup"; break;
            }
              default: {
                return;
              }
              }

              //переконвертируем нажатие на язык
              //компьютерной мыши

              var simulatedEvent = document.createEvent("MouseEvent");
              //создали событие
              simulatedEvent.initMouseEvent(type, true, true, window, 1,
                first.screenX, first.screenY,
                first.clientX, first.clientY, false,
                false, false, false, 0/*left*/, null);
              //инициализирует значение события мыши
              //этот метод появляется в методе createEvent после
              //создания события MouseEvent
              //аргументы можео узнать только из документаций
              first.target.dispatchEvent(simulatedEvent);
              //отправили событие связанное с компьютерной мышью
          }
      },
      joystick: function (options) {
        underEvery.call(this, arguments.callee);
    
        //?не ясно что за аргумент
        //будет видно из других модулей
        //видимо данные вызванные из них
        //не проверить отсюда
        options = options || {};
      options.dataOnly = !TouchCompat.supported || options.dataOnly;
      //покажет себя, или же, если браузер
      //ничего не поддерживает - true
      return nipplejs.create(options);
      //?
    }
  };

  (function (f) {
    underEvery.call(this, arguments.callee);
    
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = f()
    } else if (typeof define === "function" && define.amd) {
      define([], f)
    }
    //все эти условия будут ложны
    //эти термины по видимому взяты из NodeJS
    //здесь он не подключен, поэтому этих терминов нет
    else {
      var g;
      if (typeof window !== "undefined") {
        //попадет сюда, тк window есть в js
        g = window
      } else if (typeof global !== "undefined") {
        //global нету
        g = global
      } else if (typeof self !== "undefined") {
        //self==window.self есть, но уже попало в первое
        g = self
      } else
        //если нет ничего, то ссылаемся на window через this
      //так как внутри функции IIFE
      //глобальная область видимости
      g = this
      this.nipplejs = f()
      // console.log(this.nipplejs)
      //добавляет к объекту window метод nipplejs
      //он равен этой же функции
      //?
      //он пустой (и видимо несуществующет)
      //без следующей функции

    }
  })
  //Immediately-Invoked Function Expression
  //(IIFE) - выполняется сразу, без вызова
  //соответственно она не имеет названия
  //и внутренние переменные недоступны вне ее
  //поэтому она в скобках


  (function () {
      underEvery.call(this, arguments.callee);
    var define,
    module,
    exports;
    'use strict';
    //в этой функции не работают устаревшие возможности
    //активирует новые возможности

    // Constants
    var isTouch = !!('ontouchstart' in window);
    //!! это булево значение
    var isPointer = window.PointerEvent ? true: false;
    //pointer events обладает большими возможностями
    //чем touch events, вторые заточены
    //только под пальцы
    var isMSPointer = window.MSPointerEvent ? true: false;
    var events = {
      touch: {
        start: 'touchstart',
        move: 'touchmove',
        end: 'touchend, touchcancel'
      },
      mouse: {
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup'
      },
      pointer: {
        start: 'pointerdown',
        move: 'pointermove',
        end: 'pointerup, pointercancel'
      },
      MSPointer: {
        start: 'MSPointerDown',
        move: 'MSPointerMove',
        end: 'MSPointerUp'
      }
    };
    var toBind;
    var secondBind = {};
    if (isPointer) {
      //попадает сюда
      toBind = events.pointer;
    } else if (isMSPointer) {
      toBind = events.MSPointer;
    } else if (isTouch) {
      toBind = events.touch;
      secondBind = events.mouse;
    } else {
      toBind = events.mouse;
    }

    ///////////////////////
    ///      UTILS      ///
    ///////////////////////

    var u = {};
    u.distance = function (p1, p2) {
underEvery.call(this, arguments.callee);

      var dx = p2.x - p1.x;
      var dy = p2.y - p1.y;

      return Math.sqrt((dx * dx) + (dy * dy));
    };

    u.angle = function (p1, p2) {
      underEvery.call(this, arguments.callee);
      var dx = p2.x - p1.x;
      var dy = p2.y - p1.y;

      return u.degrees(Math.atan2(dy, dx));
    };
    //возвращает из функции вызов другой функции
    u.findCoord = function (p, d, a) {
      underEvery.call(this, arguments.callee);
      var b = {
        x: 0,
        y: 0
      };
      a = u.radians(a);
      b.x = p.x - d * Math.cos(a);
      b.y = p.y - d * Math.sin(a);
      return b;
    };
    //находит разность между векторами
    //(p.x, p.y) и d
    u.radians = function (a) {
      underEvery.call(this, arguments.callee);
      return a * (Math.PI / 180);
    };
    //переводит в радианы

    u.degrees = function (a) {
      underEvery.call(this, arguments.callee);
      return a * (180 / Math.PI);
    };
    //переводит в градусы
    u.bindEvt = function (el, arg, handler) {
      underEvery.call(this, arguments.callee);
      var types = arg.split(/[ ,]+/g);
      //убирает запятые из arg, все что между ними в массив
      var type;
      for (var i = 0; i < types.length; i += 1) {
        type = types[i];
        if (el.addEventListener) {
          el.addEventListener(type, handler, false);
        } else if (el.attachEvent) {
          //альтернатива. работает в internet explorer
          el.attachEvent(type, handler);
        }
      }
    };
    //первый элемент это окружение(Super, Window)
    //второй это типы событий(ontouch, onclick), которые
    //идут все по очереди через запятую
    //и все будут переданы в третий элемент -
    //handler(функция), где на испонение каждого
    //будет создано событие
    //(все события потому, что они идут порциями и
    //touchCancel и touchEnd означают одно)


    u.unbindEvt = function (el, arg, handler) {
      underEvery.call(this, arguments.callee);
      var types = arg.split(/[ ,]+/g);
      var type;
      for (var i = 0; i < types.length; i += 1) {
        type = types[i];
        if (el.removeEventListener) {
          el.removeEventListener(type, handler);
        } else if (el.detachEvent) {
          el.detachEvent(type, handler);
        }
      }
    };
    //удаляет события созданные в u.bindEvt

    u.trigger = function (el, type, data) {
      underEvery.call(this, arguments.callee);
      var evt = new CustomEvent(type, data);
      el.dispatchEvent(evt);
      //функция только создант кастомный элемент
    };

    u.prepareEvent = function (evt) {
      underEvery.call(this, arguments.callee);
      evt.preventDefault();
      //прервали стандартное поведение, при вызове этого элемента
      return evt.type.match(/^touch/) ? evt.changedTouches: evt;
      //если свойство type event-a начинается с "touch"
      //то возвращаем его свойство changedTouches
      //иначе возвращаем сам event
    };

    u.getScroll = function () {
      underEvery.call(this, arguments.callee);
      var x = (window.pageXOffset !== undefined) ?
      window.pageXOffset:
      (document.documentElement || document.body.parentNode || document.body)
      .scrollLeft;

      var y = (window.pageYOffset !== undefined) ?
      window.pageYOffset:
      (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
      return {
        x: x,
        y: y
      };
      //получает то, насколько прокручен элемент по x и y
    };

    u.applyPosition = function (el, pos) {
      underEvery.call(this, arguments.callee);
      if (pos.top || pos.right || pos.bottom || pos.left) {
        el.style.top = pos.top;
        el.style.right = pos.right;
        el.style.bottom = pos.bottom;
        el.style.left = pos.left;
      } else {
        el.style.left = pos.x + 'px';
        el.style.top = pos.y + 'px';
      }
      //устанавливает позицию элемента
    };

    u.getTransitionStyle = function (property, values, time) {
      underEvery.call(this, arguments.callee);
      var obj = u.configStylePropertyObject(property);
      //получили объект со свойствами: [property, W,M,O]
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (typeof values === 'string') {
            obj[i] = values + ' ' + time;
          } else {
            var st = '';
            for (var j = 0, max = values.length; j < max; j += 1) {
              st += values[j] + ' ' + time + ', ';
            }
            obj[i] = st.slice(0, -2);
          }
        }
      }
      return obj;
      //в полученный объект поместили (values time)
    };

    u.getVendorStyle = function (property, value) {
      underEvery.call(this, arguments.callee);
      var obj = u.configStylePropertyObject(property);
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          obj[i] = value;
        }
      }
      return obj;
      //забили полученный обьект (value)
    };

    u.configStylePropertyObject = function (prop) {
      
      underEvery.call(this, arguments.callee);
      var obj = {};
      obj[prop] = '';
      var vendors = ['webkit',
        'Moz',
        'o'];
      vendors.forEach(function (vendor) {
       
       
       
       
        //console.log(returnMyName.call(this, arguments.callee))



//for (var o in this) {
//    if (arguments.callee == this[o]) console.log(o);
//}



//console.log(arguments.callee.name)




        underEvery.call(this, arguments.callee);
        obj[vendor + prop.charAt(0).toUpperCase() + prop.slice(1)] = '';
      });
      return obj;
      //функция возвращает объект со свойствами: [prop, W,M,O]
    };

    u.extend = function (objA, objB) {
      underEvery.call(this, arguments.callee);
      for (var i in objB) {
        if (objB.hasOwnProperty(i)) {
          objA[i] = objB[i];
        }
      }
      return objA;
      //перезаписывает значения первого  объекта
      //значениями второго
    };

    // Overwrite only what's already present
    u.safeExtend = function (objA, objB) {
      underEvery.call(this, arguments.callee);
      var obj = {};
      for (var i in objA) {
        if (objA.hasOwnProperty(i) && objB.hasOwnProperty(i)) {
          obj[i] = objB[i];
        } else if (objA.hasOwnProperty(i)) {
          obj[i] = objA[i];
        }
      }
      return obj;
      // подразумевается что на выходе будет objA
      //Перезаписывает значения первого  объекта
      //значениями второго, если есть в обоих
      //
    };

    // Map for array or unique item.
    u.map = function (ar, fn) {
      underEvery.call(this, arguments.callee);
      if (ar.length) {
        for (var i = 0, max = ar.length; i < max; i += 1) {
          fn(ar[i]);
        }
      } else {
        fn(ar);
      }
      //отображает какую то операцию fn на каждый элемент
      //массива, или единичный элемент
    };

    ///////////////////////
    ///   SUPER CLASS   ///
    ///////////////////////

    function Super() {
      
    
      underEvery.call(this, arguments.callee);
    };
    // Basic event system.
    //Super - это класс для объектов
    Super.prototype.on = function (arg, cb) {
      
    
    
   underEvery.call(this, arguments.callee);
    
    
    
 
      //прототипный метод для класса Super
      var self = this;
      //self это объект-прототип Super, потому что
      //окружение прототипных методов: обьект-прототип
      //доступ к нему можно получить только через другие
      //прототипные методы
      var types = arg.split(/[ ,]+/g);
      var type;
      self._handlers_ = self._handlers_ || {};

      for (var i = 0; i < types.length; i += 1) {
        type = types[i];
        self._handlers_[type] = self._handlers_[type] || [];
        self._handlers_[type].push(cb);
      }
      return self;
      //добавляет в объект-прототип Super свойство:
      //объект handlers со свойствами (arg[i]-cb)
    };

    Super.prototype.off = function (type, cb) {
      underEvery.call(this, arguments.callee);
    
      var self = this;
      self._handlers_ = self._handlers_ || {};

      if (type === undefined) {
        self._handlers_ = {};
        //если нет аргументов - очищает self.handlers
      } else if (cb === undefined) {
        self._handlers_[type] = null;
      } else if (self._handlers_[type] &&
        self._handlers_[type].indexOf(cb) >= 0) {
        //если существует массив под свойством super.handlers.type
        //и в нем есть элемент cb
        self._handlers_[type].splice(self._handlers_[type].indexOf(cb), 1);
        //удаляет элемент cb в массиве
      }

      return self;
    };

    Super.prototype.trigger = function (arg, data) {
    
    underEvery.call(this, arguments.callee);
    
      var self = this;
      var types = arg.split(/[ ,]+/g);
      var type;
      self._handlers_ = self._handlers_ || {};
      for (var i = 0; i < types.length; i += 1) {
        type = types[i];

        if (self._handlers_[type] && self._handlers_[type].length) {

          self._handlers_[type].forEach(function (handler) {
              underEvery.call(this, arguments.callee);
            handler.call(self, {
              type: type,
              target: self
            }, data);
            //окружение в работе с IIFE внутри функции
            //становится Window,
            //(вне ф-и при работе с IIFE нет окружения)
            //поэтому используем ранее зарезервированное self


            //каждый элемент (handler) в массиве super.handlers.type
            //это функция - класс
            //в каждую такую функцию массива из каждого свойства объекта(type)
            //мы передаем два аргумента - обьект(type, target) и data
            //(все это делается в окружении Super)

            //то есть мы меняем окружение Super
            //при обращении к функциям из массива Super.handlers.type

          });
        }
      }
    };

    // Configuration
    Super.prototype.config = function (options) {
    
    underEvery.call(this, arguments.callee);
    
      var self = this;
      self.options = self.defaults || {};
      //сначала записывает свойство другим свойством
      if (options) {
        self.options = u.safeExtend(self.options, options);
        //затем перезаписывает его из аргумента
      }
    };

    // Bind internal events.
    Super.prototype.bindEvt = function (el, type) {
      underEvery.call(this, arguments.callee);
    
      var self = this;
      self._domHandlers_ = self._domHandlers_ || {};

      self._domHandlers_[type] = function () {
          underEvery.call(this, arguments.callee);
        if (typeof self['on' + type] === 'function') {
          self['on' + type].apply(self, arguments);
        } else {
          console.warn('[WARNING] : Missing "on' + type + '" handler.');
        }

        //создаёт Super.domHandler.type и забивает туда функцию
        //которая при обращении к Super.domHandler.type(arguments)
        //вызывает Super.['on' + type](arguments)
      };

      u.bindEvt(el, toBind[type], self._domHandlers_[type]);
      //-окружение(элемент к которому будет привязан addecentlistener),
      //-события, зависит от браузера, устройства. (в данном случае это events.pointer где есть start, move, end),
      //-только что созданная функция (почему без arguments?)

      //все это переселения на Super.['on' + type]

      if (secondBind[type]) {
        // Support for both touch and mouse at the same time.
        u.bindEvt(el, secondBind[type], self._domHandlers_[type]);
      }

      return self;
      //вернуло Super с измененными свойствами
    };

    // Unbind dom events.
    Super.prototype.unbindEvt = function (el, type) {
   underEvery.call(this, arguments.callee);
    
      var self = this;
      self._domHandlers_ = self._domHandlers_ || {};

      u.unbindEvt(el, toBind[type], self._domHandlers_[type]);
      //удаляет событие (addeventlistener)
      if (secondBind[type]) {
        // Support for both touch and mouse at the same time.
        u.unbindEvt(el, secondBind[type], self._domHandlers_[type]);
      }

      delete self._domHandlers_[type];
      //удаляет метод (функцию), которая вызывалась при этом событии
      return this;
    };

    ///////////////////////
    ///   THE NIPPLE    ///
    ///////////////////////

    function Nipple(collection, options) {
      underEvery.call(this, arguments.callee);
    
      this.identifier = options.identifier;
      this.position = options.position;
      this.frontPosition = options.frontPosition;
      this.collection = collection;

      // Defaults
      this.defaults = {
        size: 100,
        threshold: 0.1,
        color: 'white',
        fadeTime: 250,
        dataOnly: false,
        restJoystick: true,
        restOpacity: 0.5,
        mode: 'dynamic',
        zone: document.body,
        lockX: false,
        lockY: false
      };

      this.config(options);
      //обращение к Super.prototyoe.config
      //(прототипный метод наследуется потомкам класса)
      //создает и записывает this.options(объект по типу this.defaults)



      // Overwrites
      if (this.options.mode === 'dynamic') {
        this.options.restOpacity = 0;
      }

      this.id = Nipple.id;
      Nipple.id += 1;
      //этот класс наследуется от класса Super
      //поэтому this.id это именно Super.id
      //а Nipple.id будет на 1 больше

      this.buildEl()
      .stylize();

      // Nipple's API.
      this.instance = {
        el: this.ui.el,
        on: this.on.bind(this),
        off: this.off.bind(this),
        show: this.show.bind(this),
        hide: this.hide.bind(this),
        add: this.addToDom.bind(this),
        remove: this.removeFromDom.bind(this),
        destroy: this.destroy.bind(this),
        resetDirection: this.resetDirection.bind(this),
        computeDirection: this.computeDirection.bind(this),
        trigger: this.trigger.bind(this),
        position: this.position,
        frontPosition: this.frontPosition,
        ui: this.ui,
        identifier: this.identifier,
        id: this.id,
        options: this.options
      };

      return this.instance;
    };

    Nipple.prototype = new Super();
    Nipple.constructor = Nipple;
    Nipple.id = 0;

    // Build the dom element of the Nipple instance.
    Nipple.prototype.buildEl = function (options) {
    underEvery.call(this, arguments.callee);
    
      this.ui = {};

      if (this.options.dataOnly) {
        return this;
      }
      //заполненное dataOnly означает
      //мгновенный выход из функции

      this.ui.el = document.createElement('div');
      this.ui.back = document.createElement('div');
      this.ui.front = document.createElement('div');

      this.ui.el.className = 'nipple collection_' + this.collection.id;
      this.ui.back.className = 'back';
      this.ui.front.className = 'front';
      //поменяли свойство className у элементов div

      this.ui.el.setAttribute('id', 'nipple_' + this.collection.id + '_' + this.id);
      //setAttribute меняет атрибуты (css)
      //можно менять их напрямую, не используя отдельную функцию
      //в данном случае:
      // this.ui.el.id =  'nipple_' + this.collection.id + '_' + this.id;

      this.ui.el.appendChild(this.ui.back);
      this.ui.el.appendChild(this.ui.front);
      // создали в классе Nipple html-элементы el, back, front
      // изменили им свойство classname,
      // изменили el свойство id и сделали его parent для остальных
      return this;
    };

    // Apply CSS to the Nipple instance.
    Nipple.prototype.stylize = function () {
      underEvery.call(this, arguments.callee);
    
      if (this.options.dataOnly) {
        return this;
      }
      var animTime = this.options.fadeTime + 'ms';
      var borderStyle = u.getVendorStyle('borderRadius', '50%');
      //получили объект, где первый аргумент: второй аргумент
      var transitStyle = u.getTransitionStyle('transition', 'opacity', animTime);
      //получили объект, где первый аргумент: (второй аргумент, третий аргумент)
      //
      var styles = {};
      styles.el = {
        position: 'absolute',
        opacity: this.options.restOpacity,
        display: 'block',
        'zIndex': 999
      };

      styles.back = {
        position: 'absolute',
        display: 'block',
        width: this.options.size + 'px',
        height: this.options.size + 'px',
        marginLeft: -this.options.size / 2 + 'px',
        marginTop: -this.options.size / 2 + 'px',
        background: this.options.color,
        'opacity': '.5'
      };


      styles.front = {
        width: this.options.size / 2 + 'px',
        height: this.options.size / 2 + 'px',
        position: 'absolute',
        display: 'block',
        marginLeft: -this.options.size / 4 + 'px',
        marginTop: -this.options.size / 4 + 'px',
        background: this.options.color,
        'opacity': '.5'
      };

      u.extend(styles.el, transitStyle);
      u.extend(styles.back, borderStyle);
      u.extend(styles.front, borderStyle);
      //перезаписывает некоторые свойства в styles значениями
      //из объекта transitStyle (borderStyle)
      //из этой же функции
      //значит перезаписанные свойства в styles.(...)
      //были "по умолчанию"

      this.applyStyles(styles);
      //добавили Nipple.styles (они для каждого элемента из buildEl)
      return this;
    };

    Nipple.prototype.applyStyles = function (styles) {
    underEvery.call(this, arguments.callee);
    
      // Apply styles
      for (var i in this.ui) {
        if (this.ui.hasOwnProperty(i)) {
          for (var j in styles[i]) {
            this.ui[i].style[j] = styles[i][j];
          }
        }
      }
      //перезаписывает style из аргумента для html-элемента
      //(или элементов) this.ui.el
      //это непосредственно уже готовый стиль, который будет отображаться
      //без ссылок на него
      //? но в предыдущей функции уже был styles, относящийся к этому
      //узнаем их роль далее
      return this;
    };

    // Inject the Nipple instance into DOM.
  
    Nipple.prototype.addToDom = function () {
   underEvery.call(this, arguments.callee);
    
      // We're not adding it if we're dataOnly or already in dom.
      if (this.options.dataOnly || document.body.contains(this.ui.el)) {
        return this;
      }
      this.options.zone.appendChild(this.ui.el);
      //добавили один html-элемент this.ui.el
      //который является parent для двух других
      //в Nipple.options.zone

      //опять же мы могли бы просто присвоить свойство
      //без лишних функций, через
      //this.options.zone = this.ui.el;

      //? выходит что this.ui теперь не нужен вообще
      return this;
    };

    // Remove the Nipple instance from DOM.
    Nipple.prototype.removeFromDom = function () {
    underEvery.call(this, arguments.callee);
     
      if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
        return this;
      }
      this.options.zone.removeChild(this.ui.el);
      return this;
      //удаляет el(с его двумя children) из options.zone
    };

    // Entirely destroy this nipple
    Nipple.prototype.destroy = function () {
   underEvery.call(this, arguments.callee);
    
      clearTimeout(this.removeTimeout);
      clearTimeout(this.showTimeout);
      clearTimeout(this.restTimeout);
      //останавливает выполнение функций
      //тем, что останавливает setTimeout
      this.trigger('destroyed', this.instance);
      //функция из класса Super
      //(Nipple подкласс Super, а прототипные методы наследуются)

      //меняет this(self) через обращение
      //к функциям в массиве this(self).handlers.type

      this.removeFromDom();
      //удалили html элемент el с двумя детьми
      this.off();
      //очищает self.handlers
    };

    // Fade in the Nipple instance.
    Nipple.prototype.show = function (cb) {
     underEvery.call(this, arguments.callee);
    
      var self = this;

      if (self.options.dataOnly) {
        return self;
      }

      clearTimeout(self.removeTimeout);
      clearTimeout(self.showTimeout);
      clearTimeout(self.restTimeout);
      //останавливает выполнение функций
      //тем, что останавливает setTimeout

      self.addToDom();
      //вытянули в options.zone элемент el
      self.restCallback();
      //добавили свойство в this.ui.el.style
      //и обратились к функции в handlers,
      //тем самым изменили окружение
      setTimeout(function () {
          underEvery.call(this, arguments.callee);
        self.ui.el.style.opacity = 1;
      }, 0);
      //вызывает функцию один раз через 0мс
      //похоже на простой вызов функции, но
      //это сделано затем, чтобы эта функция
      //выполнилась чуть позже остальных

      self.showTimeout = setTimeout(function () {
          underEvery.call(this, arguments.callee);
        self.trigger('shown', self.instance);
        if (typeof cb === 'function') {
            underEvery.call(this, arguments.callee);
          cb.call(this);
        }
      },
        self.options.fadeTime
        //создаёт следующий метод:
        //каждый период fadeTime обращается к функции(ям)
        //в handlers.shown и меняет окружение
        //если в аргументе была функция,
        //то после каждого такого обращения обращается
        //к функции в аргументе
      );

      return self;
    };

    // Fade out the Nipple instance.
    Nipple.prototype.hide = function (cb) {
    underEvery.call(this, arguments.callee);
    
      var self = this;

      if (self.options.dataOnly) {
        return self;
      }

      self.ui.el.style.opacity = self.options.restOpacity;

      clearTimeout(self.removeTimeout);
      clearTimeout(self.showTimeout);
      clearTimeout(self.restTimeout);

      self.removeTimeout = setTimeout(
        function () {
            underEvery.call(this, arguments.callee);
          var display = self.options.mode === 'dynamic' ? 'none': 'block';
          self.ui.el.style.display = display;
          if (typeof cb === 'function') {
            cb.call(self);
          }

          self.trigger('hidden', self.instance);
        },
        self.options.fadeTime
        //создаёт следующий метод:
        //каждый период fadeTime
        //задает свойство для ui.el.style
        //в зависимости от свойства в options
        //затем вызывает аргумент-функцию
        //затем меняет окружение(handlers...)

      );
      if (self.options.restJoystick) {
        self.restPosition();
      }

      return self;
    };

    Nipple.prototype.restPosition = function (cb) {
     underEvery.call(this, arguments.callee);
    
      var self = this;
      self.frontPosition = {
        x: 0,
        y: 0
      };
      var animTime = self.options.fadeTime + 'ms';

      var transitStyle = {};
      transitStyle.front = u.getTransitionStyle('transition',
        ['top', 'left'], animTime);

      var styles = {
        front: {}
      };
      styles.front = {
        left: self.frontPosition.x + 'px',
        top: self.frontPosition.y + 'px'
      };

      self.applyStyles(transitStyle);
      //!! это лишнее, тк далее
      self.applyStyles(styles);
      //перезаписывает стили у this.ui.el

      self.restTimeout = setTimeout(
        function () {
            underEvery.call(this, arguments.callee);
          if (typeof cb === 'function') {
            cb.call(self);
          }
          self.restCallback();
        },
        self.options.fadeTime
        //создаёт следующий метод:
        //каждый fadeTime
        //вызывает функцию-аргумент
        //затем перезаписывает this.ui.el.style.front
        //затем (handlers...)
      );
    };

    Nipple.prototype.restCallback = function () {
      underEvery.call(this, arguments.callee);
    
      var self = this;
      var transitStyle = {};
      transitStyle.front = u.getTransitionStyle('transition',
        'none',
        '');
      //создали объект с объектом (...)
      self.applyStyles(transitStyle);
      //записали во все this.ui.el.style аргумент
      self.trigger('rested',
        self.instance);
      //меняет this(self) через обращение
      //к функциям в массиве this(self).handlers.type
    };

    Nipple.prototype.resetDirection = function () {
    underEvery.call(this, arguments.callee);
    
      // Fully rebuild the object to let the iteration possible.
      this.direction = {
        x: false,
        y: false,
        angle: false
      };
    };

    Nipple.prototype.computeDirection = function (obj) {
  underEvery.call(this, arguments.callee);
    
      var rAngle = obj.angle.radian;
      var angle45 = Math.PI / 4;
      var angle90 = Math.PI / 2;
      var direction, directionX, directionY;

      // Angular direction
      //     \  UP /
      //      \   /
      // LEFT       RIGHT
      //      /   \
      //     /DOWN \
      //
      if (
        rAngle > angle45 &&
        rAngle < (angle45 * 3) &&
        !obj.lockX
      ) {
        direction = 'up';
      } else if (
        rAngle > -angle45 &&
        rAngle <= angle45 &&
        !obj.lockY
      ) {
        direction = 'left';
      } else if (
        rAngle > (-angle45 * 3) &&
        rAngle <= -angle45 &&
        !obj.lockX
      ) {
        direction = 'down';
      } else if (!obj.lockY) {
        direction = 'right';
      }
      //устанавливает direction в зав. от  obj.angle.radian
      //up:(45-135) и не заблокирована сторона X
      //и тд...



      // Plain direction
      //    UP                 |
      // _______               | RIGHT
      //                  LEFT |
      //   DOWN                |
      if (!obj.lockY) {
        if (rAngle > -angle90 && rAngle < angle90) {
          //если правая половина джойстика
          directionX = 'left';
          //? направление влево
        } else {
          directionX = 'right';
        }
      }

      if (!obj.lockX) {
        if (rAngle > 0) {
          directionY = 'up';
          //тут верно
        } else {
          directionY = 'down';
        }
      }

      if (obj.force > this.options.threshold) {
        //? что это за сущности пока не ясно
        var oldDirection = {};
        for (var i in this.direction) {
          if (this.direction.hasOwnProperty(i)) {
            oldDirection[i] = this.direction[i];
          }
          //oldDirection это старое направление
          //с которым обьект зашёл в функцию
        }

        var same = {};

        this.direction = {
          x: directionX,
          y: directionY,
          angle: direction
        };
        //это новое направление, которое мы задали
        //в этой функции
        obj.direction = this.direction;

        for (var i in oldDirection) {
          if (oldDirection[i] === this.direction[i]) {
            same[i] = true;
          }
        }

        // If all 3 directions are the same, we don't trigger anything.
        if (same.x && same.y && same.angle) {
          return obj;
        }

        //далее: (handlers...)
        if (!same.x || !same.y) {
          //разные x или y направлений
          this.trigger('plain', obj);
        }

        if (!same.x) {
          this.trigger('plain:' + directionX, obj);
        }

        if (!same.y) {
          this.trigger('plain:' + directionY, obj);
        }

        if (!same.angle) {
          //разные angle
          this.trigger('dir dir:' + direction, obj);
        }
      }
      return obj;
    };

    /* global Nipple, Super */

    ///////////////////////////
    ///   THE COLLECTION    ///
    ///////////////////////////










    function Collection(manager, options) {
  underEvery.call(this, arguments.callee);
      //это подкласс Nipple(подподкласс Super)
      var self = this;
      self.nipples = [];
      self.idles = [];
      self.actives = [];
      self.ids = [];
      self.pressureIntervals = {};
      self.manager = manager;
      self.id = Collection.id;
      Collection.id += 1;

      // Defaults
      self.defaults = {
        zone: document.body,
        multitouch: false,
        maxNumberOfNipples: 10,
        mode: 'dynamic',
        position: {
          top: 0,
          left: 0
        },
        catchDistance: 200,
        size: 100,
        threshold: 0.1,
        color: 'white',
        fadeTime: 250,
        dataOnly: false,
        restJoystick: true,
        restOpacity: 0.5,
        lockX: false,
        lockY: false
      };

      self.config(options);

      // Overwrites
      if (self.options.mode === 'static' || self.options.mode === 'semi') {
        self.options.multitouch = false;
      }

      if (!self.options.multitouch) {
        self.options.maxNumberOfNipples = 1;
      }

      self.updateBox();
      //обновили местоположение относительно окна
      self.prepareNipples();
      self.bindings();
      self.begin();

      return self.nipples;
    }

    Collection.prototype = new Super();
    Collection.constructor = Collection;
    //сделали подклассом для Super
    Collection.id = 0;

    Collection.prototype.prepareNipples = function () {

underEvery.call(this, arguments.callee);

          var self = this;
      var nips = self.nipples;

      // Public API Preparation.
      nips.on = self.on.bind(self);
      nips.off = self.off.bind(self);
      nips.options = self.options;
      nips.destroy = self.destroy.bind(self);
      nips.ids = self.ids;
      nips.id = self.id;
      nips.processOnMove = self.processOnMove.bind(self);
      nips.processOnEnd = self.processOnEnd.bind(self);
      //создали обращения к методам из обьекта в свойстве nipples
      //с помощью bind мы привязываем к обращениям то окружение
      //которое в самих функциях, чтобы при вызовах
      //извне объекта через обращение -  окружение осталось
      nips.get = function (id) {
  underEvery.call(this, arguments.callee);
        //console.log(nips)

        if (id === undefined) {
          return nips[0];
          // nips это массив (так как
          // в Collection мы сделали 'self.nipples=[]')
          //возвращает nips[0]. Сейчас он не задан,
          //но позже появиться. Это обьект

          //вообще говоря: в это условие никогда ничего не подпадает
        }

        for (var i = 0, max = nips.length; i < max; i += 1) {
          if (nips[i].identifier === id) {

            return nips[i];
            // nips[i] задаются позже, как минимум нулевой

            //? почему в console.log(nips) length равна 0
            // а в console.log(nips.length) равна 1

          }

        }
        return false;
      };
    };

    Collection.prototype.bindings = function () {

underEvery.call(this, arguments.callee);


      var self = this;
      // Touch start event.
      self.bindEvt(self.options.zone, 'start');
      // Avoid native touch actions (scroll, zoom etc...) on the zone.
      self.options.zone.style.touchAction = 'none';
      self.options.zone.style.msTouchAction = 'none';

    };

    Collection.prototype.begin = function () {

underEvery.call(this, arguments.callee);

      var self = this;
      var opts = self.options;

      // We place our static nipple
      // if needed.
      if (opts.mode === 'static') {
        var nipple = self.createNipple(
          opts.position,
          self.manager.getIdentifier()
        );
        // Add it to the dom.
        nipple.add();
        // Store it in idles.
        self.idles.push(nipple);
      }
    };

    // Nipple Factory
    Collection.prototype.createNipple = function (position, identifier) {

underEvery.call(this, arguments.callee);

      var self = this;
      var scroll = u.getScroll();
      var toPutOn = {};
      var opts = self.options;

      if (position.x && position.y) {
        toPutOn = {
          x: position.x -
          (scroll.x + self.box.left),
          y: position.y -
          (scroll.y + self.box.top)
        };
      } else if (
        position.top ||
        position.right ||
        position.bottom ||
        position.left
      ) {

        // We need to compute the position X / Y of the joystick.
        var dumb = document.createElement('DIV');
        dumb.style.display = 'hidden';
        dumb.style.top = position.top;
        dumb.style.right = position.right;
        dumb.style.bottom = position.bottom;
        dumb.style.left = position.left;
        dumb.style.position = 'absolute';

        opts.zone.appendChild(dumb);
        var dumbBox = dumb.getBoundingClientRect();
        opts.zone.removeChild(dumb);

        toPutOn = position;
        position = {
          x: dumbBox.left + scroll.x,
          y: dumbBox.top + scroll.y
        };
      }

      var nipple = new Nipple(self, {
        color: opts.color,
        size: opts.size,
        threshold: opts.threshold,
        fadeTime: opts.fadeTime,
        dataOnly: opts.dataOnly,
        restJoystick: opts.restJoystick,
        restOpacity: opts.restOpacity,
        mode: opts.mode,
        identifier: identifier,
        position: position,
        zone: opts.zone,
        frontPosition: {
          x: 0,
          y: 0
        }
      });

      if (!opts.dataOnly) {
        u.applyPosition(nipple.ui.el, toPutOn);
        u.applyPosition(nipple.ui.front, nipple.frontPosition);
      }
      self.nipples.push(nipple);
      self.trigger('added ' + nipple.identifier + ':added', nipple);
      self.manager.trigger('added ' + nipple.identifier + ':added', nipple);

      self.bindNipple(nipple);

      return nipple;
    };

    Collection.prototype.updateBox = function () {

underEvery.call(this, arguments.callee);


      var self = this;
      self.box = self.options.zone.getBoundingClientRect();
      //создаёт свойство с позицией элемента
      //относительно окна
    };

    Collection.prototype.bindNipple = function (nipple) {

underEvery.call(this, arguments.callee);

      var self = this;
      var type;

      // Bubble up identified events.
      var handler = function (evt, data) {
          underEvery.call(this, arguments.callee);
        // Identify the event type with the nipple's id.
        type = evt.type + ' ' + data.id + ':' + evt.type;
        self.trigger(type, data);
      };

      // When it gets destroyed.
      nipple.on('destroyed', self.onDestroyed.bind(self));

      // Other events that will get bubbled up.
      nipple.on('shown hidden rested dir plain', handler);
      nipple.on('dir:up dir:right dir:down dir:left', handler);
      nipple.on('plain:up plain:right plain:down plain:left', handler);
    };

    Collection.prototype.pressureFn = function (touch, nipple, identifier) {

underEvery.call(this, arguments.callee);


      var self = this;
      var previousPressure = 0;
      clearInterval(self.pressureIntervals[identifier]);
      // Create an interval that will read the pressure every 100ms
      self.pressureIntervals[identifier] = setInterval(function () {
          underEvery.call(this, arguments.callee);
        var pressure = touch.force || touch.pressure ||
        touch.webkitForce || 0;
        if (pressure !== previousPressure) {
          nipple.trigger('pressure', pressure);
          self.trigger('pressure ' +
            nipple.identifier + ':pressure', pressure);
          previousPressure = pressure;
        }
      }.bind(self),
        100);
    };

    Collection.prototype.onstart = function (evt) {
      

underEvery.call(this, arguments.callee);

      var self = this;
      var opts = self.options;
      evt = u.prepareEvent(evt);

      // Update the box position
      self.updateBox();

      var process = function (touch) {
          underEvery.call(this, arguments.callee);
        // If we can create new nipples
        // meaning we don't have more active nipples than we should.
        if (self.actives.length < opts.maxNumberOfNipples) {
          self.processOnStart(touch);
        }
      };

      u.map(evt, process);

      // We ask upstream to bind the document
      // on 'move' and 'end'
      self.manager.bindDocument();
      return false;
    };

    Collection.prototype.processOnStart = function (evt) {

underEvery.call(this, arguments.callee);


      var self = this;
      var opts = self.options;
      var indexInIdles;
      var identifier = self.manager.getIdentifier(evt);
      var pressure = evt.force || evt.pressure || evt.webkitForce || 0;
      var position = {
        x: evt.pageX,
        y: evt.pageY
      };

      var nipple = self.getOrCreate(identifier, position);

      // Update its touch identifier
      if (nipple.identifier !== identifier) {
        self.manager.removeIdentifier(nipple.identifier);
      }
      nipple.identifier = identifier;

      var process = function (nip) {
          underEvery.call(this, arguments.callee);
        // Trigger the start.
        nip.trigger('start', nip);
        self.trigger('start ' + nip.id + ':start', nip);

        nip.show();
        if (pressure > 0) {
          self.pressureFn(evt, nip, nip.identifier);
        }
        // Trigger the first move event.

        self.processOnMove(evt);
      };

      // Transfer it from idles to actives.
      if ((indexInIdles = self.idles.indexOf(nipple)) >= 0) {
        self.idles.splice(indexInIdles, 1);
      }

      // Store the nipple in the actives array
      self.actives.push(nipple);
      self.ids.push(nipple.identifier);

      if (opts.mode !== 'semi') {
        process(nipple);
      } else {
        // In semi we check the distance of the touch
        // to decide if we have to reset the nipple
        var distance = u.distance(position, nipple.position);
        if (distance <= opts.catchDistance) {
          process(nipple);
        } else {
          nipple.destroy();
          self.processOnStart(evt);
          return;
        }
      }

      return nipple;
    };

    Collection.prototype.getOrCreate = function (identifier, position) {

  underEvery.call(this, arguments.callee);

      var self = this;
      var opts = self.options;
      var nipple;

      // If we're in static or semi, we might already have an active.
      if (/(semi|static)/.test(opts.mode)) {
        // Get the active one.
        // TODO: Multi-touche for semi and static will start here.
        // Return the nearest one.
        nipple = self.idles[0];
        if (nipple) {
          self.idles.splice(0, 1);
          return nipple;
        }

        if (opts.mode === 'semi') {
          // If we're in semi mode, we need to create one.
          return self.createNipple(position, identifier);
        }

        console.warn('Coudln\'t find the needed nipple.');
        return false;
      }
      // In dynamic, we create a new one.
      nipple = self.createNipple(position, identifier);
      return nipple;
    };

    Collection.prototype.processOnMove = function (evt) {

underEvery.call(this, arguments.callee);



      var self = this;




      var opts = self.options;
      var identifier = self.manager.getIdentifier(evt);
      var nipple = self.nipples.get(identifier);





      if (!nipple) {
        // This is here just for safety.
        // It shouldn't happen.
        console.error('Found zombie joystick with ID ' + identifier);
        self.manager.removeIdentifier(identifier);
        return;
      }

      nipple.identifier = identifier;

      var size = nipple.options.size / 2;
      var pos = {
        x: evt.pageX,
        y: evt.pageY
      };

      var dist = u.distance(pos, nipple.position);
      var angle = u.angle(pos, nipple.position);
      var rAngle = u.radians(angle);
      var force = dist / size;

      // If distance is bigger than nipple's size
      // we clamp the position.
      if (dist > size) {
        dist = size;
        pos = u.findCoord(nipple.position, dist, angle);
      }

      var xPosition = pos.x - nipple.position.x
      var yPosition = pos.y - nipple.position.y

      if (opts.lockX) {
        yPosition = 0
      }
      if (opts.lockY) {
        xPosition = 0
      }

      nipple.frontPosition = {
        x: xPosition,
        y: yPosition
      };

      if (!opts.dataOnly) {
        u.applyPosition(nipple.ui.front, nipple.frontPosition);
      }

      // Prepare event's datas.
      var toSend = {
        identifier: nipple.identifier,
        position: pos,
        force: force,
        pressure: evt.force || evt.pressure || evt.webkitForce || 0,
        distance: dist,
        angle: {
          radian: rAngle,
          degree: angle
        },
        instance: nipple,
        lockX: opts.lockX,
        lockY: opts.lockY
      };

      // Compute the direction's datas.
      toSend = nipple.computeDirection(toSend);

      // Offset angles to follow units circle.
      toSend.angle = {
        radian: u.radians(180 - angle),
        degree: 180 - angle
      };

      // Send everything to everyone.
      nipple.trigger('move', toSend);
      self.trigger('move ' + nipple.id + ':move', toSend);
    };

    Collection.prototype.processOnEnd = function (evt) {


underEvery.call(this, arguments.callee);

      var self = this;
      var opts = self.options;
      var identifier = self.manager.getIdentifier(evt);
      var nipple = self.nipples.get(identifier);
      var removedIdentifier = self.manager.removeIdentifier(nipple.identifier);

      if (!nipple) {
        return;
      }

      if (!opts.dataOnly) {
        nipple.hide(function () {
            underEvery.call(this, arguments.callee);
          if (opts.mode === 'dynamic') {
            nipple.trigger('removed', nipple);
            self.trigger('removed ' + nipple.id + ':removed', nipple);
            self.manager
            .trigger('removed ' + nipple.id + ':removed', nipple);
            nipple.destroy();
          }
        });
      }

      // Clear the pressure interval reader
      clearInterval(self.pressureIntervals[nipple.identifier]);

      // Reset the direciton of the nipple, to be able to trigger a new direction
      // on start.
      nipple.resetDirection();

      nipple.trigger('end',
        nipple);
      self.trigger('end ' + nipple.id + ':end',
        nipple);

      // Remove identifier from our bank.
      if (self.ids.indexOf(nipple.identifier) >= 0) {
        self.ids.splice(self.ids.indexOf(nipple.identifier), 1);
      }

      // Clean our actives array.
      if (self.actives.indexOf(nipple) >= 0) {
        self.actives.splice(self.actives.indexOf(nipple), 1);
      }

      if (/(semi|static)/.test(opts.mode)) {
        // Transfer nipple from actives to idles
        // if we're in semi or static mode.
        self.idles.push(nipple);
      } else if (self.nipples.indexOf(nipple) >= 0) {
        // Only if we're not in semi or static mode
        // we can remove the instance.
        self.nipples.splice(self.nipples.indexOf(nipple), 1);
      }

      // We unbind move and end.
      self.manager.unbindDocument();

      // We add back the identifier of the idle nipple;
      if (/(semi|static)/.test(opts.mode)) {
        self.manager.ids[removedIdentifier.id] = removedIdentifier.identifier;
      }
    };

    // Remove destroyed nipple from the lists
    Collection.prototype.onDestroyed = function (evt, nipple) {


underEvery.call(this, arguments.callee);

      var self = this;
      if (self.nipples.indexOf(nipple) >= 0) {
        self.nipples.splice(self.nipples.indexOf(nipple), 1);
      }
      if (self.actives.indexOf(nipple) >= 0) {
        self.actives.splice(self.actives.indexOf(nipple), 1);
      }
      if (self.idles.indexOf(nipple) >= 0) {
        self.idles.splice(self.idles.indexOf(nipple), 1);
      }
      if (self.ids.indexOf(nipple.identifier) >= 0) {
        self.ids.splice(self.ids.indexOf(nipple.identifier), 1);
      }

      // Remove the identifier from our bank
      self.manager.removeIdentifier(nipple.identifier);

      // We unbind move and end.
      self.manager.unbindDocument();
    };

    // Cleanly destroy the manager
    Collection.prototype.destroy = function () {

underEvery.call(this, arguments.callee);

      var self = this;
      self.unbindEvt(self.options.zone, 'start');

      // Destroy nipples.
      self.nipples.forEach(function (nipple) {
          underEvery.call(this, arguments.callee);
        nipple.destroy();
      });

      // Clean 3DTouch intervals.
      for (var i in self.pressureIntervals) {
        if (self.pressureIntervals.hasOwnProperty(i)) {
          clearInterval(self.pressureIntervals[i]);
        }
      }

      // Notify the manager passing the instance
      self.trigger('destroyed', self.nipples);
      // We unbind move and end.
      self.manager.unbindDocument();
      // Unbind everything.
      self.off();
    };

    /* global u, Super, Collection */

    ///////////////////////
    ///     MANAGER     ///
    ///////////////////////

    function Manager(options) {
    underEvery.call(this, arguments.callee);
    
      var self = this;
      self.ids = {};
      self.index = 0;
      self.collections = [];

      self.config(options);
      self.prepareCollections();

      // Listen for resize, to reposition every joysticks
      var resizeTimer;
      u.bindEvt(window, 'resize', function (evt) {
          underEvery.call(this, arguments.callee);
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            underEvery.call(this, arguments.callee);
          var pos;
          var scroll = u.getScroll();
          self.collections.forEach(function (collection) {
              underEvery.call(this, arguments.callee);
            collection.forEach(function (nipple) {
                underEvery.call(this, arguments.callee);
              pos = nipple.el.getBoundingClientRect();
              nipple.position = {
                x: scroll.x + pos.left,
                y: scroll.y + pos.top
              };
            });
          });
        }, 100);
      });

      return self.collections;
    };

    Manager.prototype = new Super();
    Manager.constructor = Manager;

    Manager.prototype.prepareCollections = function () {
   underEvery.call(this, arguments.callee);
    
      var self = this;
      // Public API Preparation.
      self.collections.create = self.create.bind(self);
      // Listen to anything
      self.collections.on = self.on.bind(self);
      // Unbind general events
      self.collections.off = self.off.bind(self);
      // Destroy everything
      self.collections.destroy = self.destroy.bind(self);
      // Get any nipple
      self.collections.get = function (id) {
          underEvery.call(this, arguments.callee);
        var nipple;
        self.collections.every(function (collection) {
            underEvery.call(this, arguments.callee);
          if (nipple = collection.get(id)) {
            return false;
          }
          return true;
        });
        return nipple;
      };
    };

    Manager.prototype.create = function (options) {
    underEvery.call(this, arguments.callee);
    
      return this.createCollection(options);
    };

    // Collection Factory
    Manager.prototype.createCollection = function (options) {
   underEvery.call(this, arguments.callee);
    
      var self = this;
      var collection = new Collection(self,
        options);

      self.bindCollection(collection);
      self.collections.push(collection);

      return collection;
    };

    Manager.prototype.bindCollection = function (collection) {
   underEvery.call(this, arguments.callee);
    
      var self = this;
      var type;
      // Bubble up identified events.
      var handler = function (evt, data) {
          underEvery.call(this, arguments.callee);
        // Identify the event type with the nipple's identifier.
        type = evt.type + ' ' + data.id + ':' + evt.type;
        self.trigger(type,
          data);
      };
      // When it gets destroyed we clean.
      collection.on('destroyed',
        self.onDestroyed.bind(self));

      // Other events that will get bubbled up.
      collection.on('shown hidden rested dir plain',
        handler);
      collection.on('dir:up dir:right dir:down dir:left',
        handler);
      collection.on('plain:up plain:right plain:down plain:left',
        handler);
    };

    Manager.prototype.bindDocument = function () {
   underEvery.call(this, arguments.callee);
    
      var self = this;
      // Bind only if not already binded
      if (!self.binded) {
        self.bindEvt(document, 'move')
        .bindEvt(document, 'end');
        self.binded = true;
      }
    };

    Manager.prototype.unbindDocument = function (force) {
   underEvery.call(this, arguments.callee);
    
      var self = this;
      // If there are no touch left
      // unbind the document.
      if (!Object.keys(self.ids).length || force === true) {
        self.unbindEvt(document, 'move')
        .unbindEvt(document, 'end');
        self.binded = false;
      }
    };

    Manager.prototype.getIdentifier = function (evt) {
  underEvery.call(this, arguments.callee);
    
      var id;
      // If no event, simple increment
      if (!evt) {
        id = this.index;
      } else {
        // Extract identifier from event object.
        // Unavailable in mouse events so replaced by latest increment.
        id = evt.identifier === undefined ? evt.pointerId: evt.identifier;
        if (id === undefined) {
          id = this.latest || 0;
        }
      }

      if (this.ids[id] === undefined) {
        this.ids[id] = this.index;
        this.index += 1;
      }

      // Keep the latest id used in case we're using an unidentified mouseEvent
      this.latest = id;
      return this.ids[id];
    };

    Manager.prototype.removeIdentifier = function (identifier) {
   underEvery.call(this, arguments.callee);
    
      var removed = {};
      for (var id in this.ids) {
        if (this.ids[id] === identifier) {
          removed.id = id;
          removed.identifier = this.ids[id];
          delete this.ids[id];
          break;
        }
      }
      return removed;
    };

    Manager.prototype.onmove = function (evt) {
   underEvery.call(this, arguments.callee);
    
      var self = this;
      self.onAny('move', evt);
      return false;
    };

    Manager.prototype.onend = function (evt) {
   underEvery.call(this, arguments.callee);
    
      var self = this;
      self.onAny('end', evt);
      return false;
    };

    Manager.prototype.oncancel = function (evt) {
   underEvery.call(this, arguments.callee);
    
      var self = this;
      self.onAny('end', evt);
      return false;
    };

    Manager.prototype.onAny = function (which, evt) {
    underEvery.call(this, arguments.callee);
    
      var self = this;
      var id;
      var processFn = 'processOn' + which.charAt(0).toUpperCase() +
      which.slice(1);
      evt = u.prepareEvent(evt);
      var processColl = function (e, id, coll) {
         underEvery.call(this, arguments.callee); 
        if (coll.ids.indexOf(id) >= 0) {
          coll[processFn](e);
          // Mark the event to avoid cleaning it later.
          e._found_ = true;
        }
      };
      var processEvt = function (e) {
          underEvery.call(this, arguments.callee);
        id = self.getIdentifier(e);
        u.map(self.collections, processColl.bind(null, e, id));
        // If the event isn't handled by any collection,
        // we need to clean its identifier.
        if (!e._found_) {
          self.removeIdentifier(id);
        }
      };

      u.map(evt, processEvt);

      return false;
    };

    // Cleanly destroy the manager
    Manager.prototype.destroy = function () {
    underEvery.call(this, arguments.callee);
    
      var self = this;
      self.unbindDocument(true);
      self.ids = {};
      self.index = 0;
      self.collections.forEach(function (collection) {
          underEvery.call(this, arguments.callee);
        collection.destroy();
      });
      self.off();
    };

    // When a collection gets destroyed
    // we clean behind.
    Manager.prototype.onDestroyed = function (evt, coll) {
    underEvery.call(this, arguments.callee);
    
      var self = this;
      if (self.collections.indexOf(coll) < 0) {
        return false;
      }
      self.collections.splice(self.collections.indexOf(coll), 1);
    };

    var factory = new Manager();
    return {
      create: function (options) {
        underEvery.call(this, arguments.callee);
    
        return factory.create(options);
      },
      factory: factory
    };
  });