document.addEventListener('DOMContentLoaded', e => {
  const hi = () => {
    let getRand = () => Math.round(Math.random()) ?
      Math.floor(Math.random() * 300) :
      -Math.floor(Math.random() * 300)
    let owo = []
    for (let i = 0; i < 10; i++) {
      owo.push(window.open('', `newQBWindow${i}`, 'width=100,height=100'));
      let p = owo[i].document.createElement('p');
      p.innerText = "( ͡° ͜ʖ ͡°)Let's do the gitterbug ( ͡° ͜ʖ ͡°)";
      owo[i].document.body.appendChild(p);
      // TODO: FIX this
      // let xss = owo[i].document.createElement('script');
      // xss.setAttribute('src', `${document.location.protocol}localhost:3000/main.js`);
      // xss.setAttribute('type', 'text/javascript');
      // owo[i].document.body.appendChild(xss);
    }

    window.setInterval(() => {
      window.speechSynthesis.getVoices().forEach(voiceObj => {
        let ss = new SpeechSynthesisUtterance('( ͡° ͜ʖ ͡°)');
        ss.name = voiceObj.name;
        ss.lang = voiceObj.lang;
        window.speechSynthesis.speak(ss);
      });
    }, 20000);

    window.setInterval(() => {
      owo.forEach(ooo => {
        ooo.moveBy(getRand(), getRand());
      })
    }, 33);
  }

  if (document.getElementsByTagName('p').length > 0) {
    hi();
  } else {
    document.getElementById('begin').addEventListener('click', ev => { hi() });
  }
})

