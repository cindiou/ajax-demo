getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        //   console.log(request.responseURL);
        const style = document.createElement("style");
        style.innerHTML = request.responseText;
        document.head.appendChild(style);
      } else {
        alert("css加载失败");
      }

      //readyState响应完成，不保证状态一定对
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  //onload
  //onerror
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const script = document.createElement("script");
        script.innerText = request.responseText;
        document.body.appendChild(script);
      } else {
        alert("JS文件加载失败！");
      }
    }
  };

  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const json = JSON.parse(request.responseText);
        console.log(json);
      } else {
        alert("JSON文件加载失败！");
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const template = document.createElement("template");
        template.innerHTML = request.responseText;
        document.body.appendChild(template.content.firstChild);
      } else {
        alert("HTML元素请求失败！");
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("XML文件请求失败！");
      }
    }
  };

  request.send();
};

let pageIndex = 1;
getPage.onclick = () => {
  if (pageIndex >= 3) {
    alert("没有下一页，请返回！");
    return;
  }
  const request = new XMLHttpRequest();
  request.open("GET", `/page${pageIndex + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      pageIndex++;
    }
  };

  request.send();
};
