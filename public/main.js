/**
 * I have much shame for writing this, I believe it has evolved from something
 * manageable to close to something HORRID.
 */
document.addEventListener('DOMContentLoaded', e => {
  /**
   * Helper function that crates a random negative number between -300 and 300.
   */
  const getRand = () => Math.round(Math.random()) ?
    Math.floor(Math.random() * 300) :
    -Math.floor(Math.random() * 300);

  /**
   * Helper function that adds a bunch of terrible shit to the new window.
   * @param {Window} w Window global for new popup window.
   */
  const addBunch_o_shizTo_newWindow = (it) => {
    //Lenny
    let p = document.createElement('p'), theLegend;
    p.innerText = "( ͡° ͜ʖ ͡°) Let's do the gitterbug ( ͡° ͜ʖ ͡°)";
    document.getElementById('rickHere').appendChild(p);
    //RickRoll
    theLegend = document.createElement('iframe');
    theLegend.setAttribute('width', '50');
    theLegend.setAttribute('height', '50');
    theLegend.setAttribute('src', 'https://www.youtube.com/embed/oHg5SJYRHA0?controls=0&amp;start=1;autoplay=1');
    theLegend.setAttribute('frameborder', '0');
    theLegend.setAttribute('allow', 'autoplay');
    document.getElementById('rickHere').appendChild(theLegend);
  };

  /**
   * Runner that inits all the terrible.
   * @param {number} it number of iterations for a new window to appear.
   * The higher this number the more like you are to need to force quit
   */
  const runner = (winName, it) => {
    /**
     * Container for windows.
     */
    let owo = [];

    for (let i = 0; i < it; i++) {
      // Windows need to be named differently to exist as multiples.
      owo.push(window.open(`https://gitterbug.surge.sh`, `${winName}${i}`, 'width=100,height=100'));
    }

    addBunch_o_shizTo_newWindow(it);

    /**
     * Utter speech in every voice every 20 seconds.
     */
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

  /**
   * Dispatcher for runner,
   * It will load tiny copies of itself that start loading tiny copies of
   * themselves.
   */
  const dispatch = o => {
    document.getElementById('begin').addEventListener('click', ev => { runner(`${getRand()}`, o); });
    document.addEventListener('keydown', eve => { runner(`${getRand()}`, o); });
    runner(`${getRand()}`, o);
  }
  /**
   * Go.
   */
  dispatch(1);
})
