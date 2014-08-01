module.exports = Call;
var request = require('superagent');

function Call(){

}



Call.prototype.get_wine = function() {
  var call = this;
  request
    .get('http://localhost:3000')
    .set('Accept', 'application/json')
    .end(function(error, res){
      this.template = require('./templatea.jade');
      this.$el = document.querySelector('#chiamata');
      if (error === null){
        if (res.status === 200){
          this.$el.innerHTML = this.template({
            value: JSON.parse(res.text)
          });
          console.log(res);
        } else {
          this.$el.innerHTML = this.template({
            value: ['TROPPO VINOH']
          });
        }
      } else {
        this.$el.innerHTML = this.template({
          value: ['TROPPO VINOH']
        });
      }
      aggiorna = document.querySelector('#aggiorna');
      console.log(aggiorna);
      aggiorna.addEventListener('click', function(){call.get_wine()});
    });
};