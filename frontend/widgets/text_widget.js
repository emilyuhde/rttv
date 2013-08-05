function TextWidget(config) {

    this.config = config;

    $('.container').append("<div class=\"widget " + this.config.id + "\" id=\"widget " + this.config.id + "\"></div>");
    $('.container').append("<script type=\"text/javascript\">document.getElementById('widget " + this.config.id + "').style.width=\"" + this.config.width + "px\";</script>");
    $('.container').append("<script type=\"text/javascript\">document.getElementById('widget " + this.config.id + "').style.height=\"" + this.config.height + "px\";</script>");

    var text = "",
        value_labels = {},
        divElement = document.getElementById('widget ' + this.config.id),
        maxval = 0, minval = 99999;

    if (this.config.controls) {
        this.config.controls.forEach(function(control) {
            value_labels[control.label] = ' ';
        });
    }

    this.put = function(controlLabel, value) {
        if (value_labels[controlLabel]) {
            value_labels[controlLabel] = isFloat(value) ? value.toFixed(2) : value.toFixed(0);
        }
        newText = '<strong>' + this.config.id.toUpperCase() + '</strong>';
        jQuery.each(value_labels, function(label, value) {
            newText += '<br>';
            newText += label + ': ';
            newText += value;
        });
        this.setText(newText);
    };

    this.setText = function(_text) {
        text = _text;
        divElement.innerHTML = text;
    };

    this.draw = function() {

    };

    function isFloat(n) {
      return typeof n === 'number' && n % 1 !== 0;
    }
}

TextWidget.prototype = new Widget();