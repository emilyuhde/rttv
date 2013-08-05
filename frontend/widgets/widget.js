function Widget () {

}

Widget.prototype = {
    putJSON: function(jsonObject) {
        this.config.controls.forEach(function(control) {
            // TODO bail if source does not cointain '.'
            var source = control.source.split('.');
            if (source[0] == jsonObject.fieldID && source[1] in jsonObject) {
                var value = eval('jsonObject.' + source[1]);
                // Check for the two built in config options for max and min values
                if (typeof source[2] != 'undefined') {
                    if (source[2] == 'Max') {
                        if (value > maxval) { maxval = value; }
                        value = maxval;
                    }
                    if (source[2] == 'Min') {
                        if (value < minval) { minval = value; }
                        value = minval;
                    }
                }
                this.put(control.label, value);
            }
        });
    }
 };