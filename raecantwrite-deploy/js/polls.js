(function(){
  document.querySelectorAll('.poll').forEach(function(poll){
    var counts = (poll.dataset.votes || '').split(',').map(function(n){ return parseInt(n, 10) || 0; });
    var options = poll.querySelectorAll('.poll-option');

    function render(chosenIndex){
      var total = counts.reduce(function(a, b){ return a + b; }, 0) || 1;
      options.forEach(function(btn, i){
        var pct = Math.round((counts[i] / total) * 100);
        btn.querySelector('.pct').textContent = pct + '%';
        btn.querySelector('.bar').style.width = pct + '%';
        btn.disabled = true;
        if (i === chosenIndex) btn.classList.add('chosen');
      });
      poll.classList.add('voted');
    }

    options.forEach(function(btn, i){
      btn.addEventListener('click', function(){
        if (poll.classList.contains('voted')) return;
        counts[i] += 1;
        render(i);
      });
    });
  });
})();
