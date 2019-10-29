(function init () {
  var app = document.getElementById("app"),
      leftDropper = document.getElementById("left")

  var listItems = createListItems(8)
  leftDropper.appendChild(listItems)
  registerEventHandlers()

  function createListItems (n) {
    var frag = document.createDocumentFragment()
    for (let i = 0; i < n; i++) {
      var item = document.createElement("div")
      item.setAttribute("class", "item")
      item.setAttribute("id", "item" + i)
      item.setAttribute("draggable", true)
      item.innerHTML = "item" + (i + 1)
      frag.appendChild(item)
    }
    return frag
  }

  function registerEventHandlers () {
    EventUtil.addHandler(app, "dragstart", function (ev) {
      var e = EventUtil.getEvent(ev)
      var target = EventUtil.getTarget(e)
      e.dataTransfer.effectAllowed = "move"
      if (target.draggable) {
        e.dataTransfer.setData("id", target.id);
      }
    })

    EventUtil.addHandler(app, "dragenter", function (ev) {
      EventUtil.preventDefault(ev) // 防止目标不允许放置
      var target = EventUtil.getTarget(ev)
      var id = target.id
      if (id === "left" || id === "right" || isItem(target) !== -1) {
        target.classList.add("over")
      }
    })

    EventUtil.addHandler(app, "dragover", function (ev) {
      EventUtil.preventDefault(ev) // 防止目标不允许放置
    })

    EventUtil.addHandler(app, "dragleave", function (ev) {
      var target = EventUtil.getTarget(ev)
      var id = target.id
      if (id === "left" || id === "right" || isItem(target) !== -1) {
        target.classList.remove("over")
      }
    })

    EventUtil.addHandler(app, "drop", function (ev) {
      var e = EventUtil.getEvent(ev)
      var target = EventUtil.getTarget(e)
      EventUtil.preventDefault(e) // 防止浏览器打开链接
      var DragedId = e.dataTransfer.getData("id");
      var el = document.getElementById(DragedId); // 当前拖动的元素
      var toElId = target.id; // 放置位置
      if (toElId == "left" || toElId === "right") {
        // 如果为container,元素放置在末尾
        target.appendChild(el);
      } else {
        // 如果为container里的元素，则插入该元素之前
        target.parentNode.insertBefore(el, document.getElementById(toElId));
      }
    })
  }

  function isItem (el) {
    return el.classList && Array.prototype.indexOf.call(el.classList, "item")
  }
})()
