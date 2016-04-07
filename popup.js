$(document).on('ready', function() {

  //Colors are initially set on window load.
  var variation = 'default';
  setColors(178, 'default');

  //Color Generator Helper Function
  function setColors(hueVal, variation) {

    var scheme = new ColorScheme;
    scheme.from_hue(hueVal)
      .scheme('triade')
      .distance(0.1)
      .add_complement(false)
      .variation(variation)
      .web_safe(true);

    var colors = scheme.colors();

    colors.forEach((color, index) => {
      $('#card' + index).css('background-color', '#' + colors[index]);
      $('#hex' + index).text('#' + colors[index]);
    });
  }

  //Handles all events including the slider and radio button selections.
  $('#ranger').on("change mousemove", function() {
    var value = $(this).val();
    //console.log(value);
    // var output = $('#volume').val();
    $('#radio1').click(function() {
      variation = 'default';
      setColors(value, variation);
    });
    $('#radio2').click(function() {
      variation = 'pastel';
      setColors(value, variation);
    });
    $('#radio3').click(function() {
      variation = 'soft';
      setColors(value, variation);
    });
    $('#radio4').click(function() {
      variation = 'light';
      setColors(value, variation);
    });
    $('#radio5').click(function() {
      variation = 'hard';
      setColors(value, variation);
    });
    $('#radio6').click(function() {
      variation = 'pale';
      console.log(variation);
      setColors(value, variation);
    });
    setColors(value, variation);
  });

});
