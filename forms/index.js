const forms = require('forms');

const fields = forms.fields;
const validators = forms.validators;

var bootstrapField = function (name, object) {
    if (!Array.isArray(object.widget.classes)) { object.widget.classes = []; }

    if (object.widget.classes.indexOf('form-control') === -1) {
        object.widget.classes.push('form-control');
    }

    var validationclass = object.value && !object.error ? 'is-valid' : '';
    validationclass = object.error ? 'is-invalid' : validationclass;
    if (validationclass) {
        object.widget.classes.push(validationclass);
    }

    var label = object.labelHTML(name);
    var error = object.error ? '<div class="invalid-feedback">' + object.error + '</div>' : '';

    var widget = object.widget.toHTML(name, object);
    return '<div class="form-group">' + label + widget + error + '</div>';
};

const createProductForm = () => {
    return forms.create({
        'title': fields.string({
            'required': true,
            'errorAfterField': true,
            'cssClasses': {
                label: ['form-label']
            }
        }),
        'cost': fields.string({
            'required': true,
            'errorAfterField': true,
            'cssClasses':{
                label: ['form-label']
            },
            'validators':[validators.integer(), validators.min(0)]
        }),
        'description': fields.string({
            'required': true,
            'errorAfterField': true,
            'widget': forms.widgets.textarea(),
            'cssClasses': {
                label:['form-label']
            }
        }),
        'date': fields.date({
            'required': true,   
            'errorAfterField': true,
            'widget': forms.widgets.date(),
            'cssClasses': {
                label:['form-label']
            }
        }),
        'stock': fields.number({
            'required': true,
            'errorAfterField': true,
            'cssClasses':{
                label: ['form-label']
            },
            'validators':[validators.integer(), validators.min(0)]
        }),
        'height': fields.number({
            'required': true,
            'errorAfterField': true,
            'cssClasses':{
                label: ['form-label']
            },
            'validators':[validators.integer(), validators.min(0)]
        }),
        'width': fields.number({
            'required': true,
            'errorAfterField': true,
            'cssClasses':{
                label: ['form-label']
            },
            'validators':[validators.integer(), validators.min(0)]
        }),
    })
}

module.exports = { bootstrapField, createProductForm};