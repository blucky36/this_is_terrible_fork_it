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
  const addBunch_o_shizTo_newWindow = w => {
    let p = w.document.createElement('p');
    w.innerText = "( ͡° ͜ʖ ͡°)Let's do the gitterbug ( ͡° ͜ʖ ͡°)";
    w.document.body.appendChild(p);
  };

  /**
   * Runner that inits all the terrible.
   * @param {number} it number of iterations for a new window to appear.
   */
  const runner = (winName, it) => {
    /**
     * Container for windows.
     */
    let owo = [];

    for (let i = 0; i < it; i++) {
      // Windows need to be named differently to exist as multiples.
      owo.push(window.open(`localhost:3000`, `${winName}${i}`, 'width=100,height=100'));
      addBunch_o_shizTo_newWindow(owo[i])
    }

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
   * Dispatcher for runner, will add 1 new window if run on a p tag window.
   * This is put in a half second timeout to give the p tag check time to be
   * an option.
   */
  window.setTimeout(() => {
    if (document.getElementsByTagName('p').length > 0) {
      runner(`${getRand()}`, 1);
    } else {
      document.getElementById('begin').addEventListener('click', ev => { runner(10) });
    }
  }, 500)
})

