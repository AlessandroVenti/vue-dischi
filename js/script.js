// Attraverso una chiamata ajax all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali. 
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.


function initVue() {
  new Vue({
      el: '#jsMusic',
      data: {
          musicArray : [],
          genreArray : [],
          selectInput : ''    
      },
      mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(data => {
          this.musicArray = data.data.response;
          for (let i = 0; i < this.musicArray.length; i++) {
            if (!this.genreArray.includes(this.musicArray[i].genre)) { 
            this.genreArray.push(this.musicArray[i].genre);
            }
          }
        })
        .catch(() => console.log('error'));
      },
      
      methods: {

        filtrateGenre: function() {
          let filtratedMusicArray = this.musicArray.filter(element => element.genre.includes(this.selectInput));
          return filtratedMusicArray;
        }
      }
  });
}

function init() {
  initVue();
}

document.addEventListener('DOMContentLoaded', init);