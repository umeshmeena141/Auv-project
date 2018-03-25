var $software = $('#Software');
var $electrical = $('#Electrical');
var $mechanical = $('#Mechanical');
$software.on('show.bs.collapse','.collapse', function() {
    $software.find('.collapse.in').collapse('hide');
});

$electrical.on('show.bs.collapse','.collapse', function() {
    $electrical.find('.collapse.in').collapse('hide');
});

$mechanical.on('show.bs.collapse','.collapse', function() {
    $mechanical.find('.collapse.in').collapse('hide');
});
