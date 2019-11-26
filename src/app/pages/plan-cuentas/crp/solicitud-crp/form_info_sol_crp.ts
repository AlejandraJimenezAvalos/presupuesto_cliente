export let FORM_INFO_SOL_CRP = {

    tipo_formulario: 'currency',
    alertas: true,
    modelo: 'SolicitudCRP',
    campos: [
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'Vigencia',
            label_i18n: 'Vigencia',
            placeholder_i18n: 'Vigencia',
            requerido: true,
            tipo: 'text',
            key: 'valor',
            opciones: [{Id:1,valor:'2018'},{Id:2,valor:'2019'},{Id:3, valor:'2020'}],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'TipoCompromiso',
            label_i18n: 'Tipo de Compromiso',
            placeholder_i18n: 'Tipo de Compromiso',
            requerido: true,
            tipo: 'TipoCompromiso',
            key: 'Nombre',
            opciones: [],
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'NumeroCompromiso',
            label_i18n: 'Número de Compromiso',
            placeholder_i18n: 'Número de Compromiso',
            requerido: true,
            tipo: 'number',
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'TipoDocumento',
            label_i18n: 'Tipo de Documento',
            placeholder_i18n: 'Tipo de Documento',
            requerido: true,
            tipo: 'TipoDocumento',
            key: 'ValorParametro',
            opciones: [],
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-3 col-md-3 col-sm-3 col-xs-3',
            nombre: 'NumeroDocumento',
            label_i18n: 'Número de Documento',
            placeholder_i18n: 'Número de Documento',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'button',
            claseBoton: 'button',
            claseGrid: 'col-lg-1 col-md-1 col-sm-1 col-xs-1',
            icono: 'nb-search',
            requerido: false,
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'NombreBeneficiario',
            label_i18n: 'Nombre de Beneficiario',
            placeholder_i18n: 'Nombre de Beneficiario',
            requerido: false,
            deshabilitar: true,
            tipo: 'text',
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
            nombre: 'MontoCRP',
            label_i18n: 'Monto del CRP',
            placeholder_i18n: 'Monto del CRP',
            requerido: true,
            tipo: 'MontoTipo',
            key: 'valor',
            opciones: [{Id:1,valor:'Monto Parcial'},{Id:2,valor:'Monto Total'}],
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
            nombre: 'ValorParcial',
            label_i18n: 'Valor Parcial',
            placeholder_i18n: 'Valor Parcial',
            requerido: false,
            tipo: 'text',
            enabledcurrency: true,
            prefix: {
                value: '',
            },
        },
        {
            etiqueta: 'label',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'FechaInicioV',
            label_i18n: 'Fecha Inicio Vigencia',
            placeholder_i18n: 'Valor Parcial',
            requerido: true,
            tipo: 'text',
        }
    ],
};
