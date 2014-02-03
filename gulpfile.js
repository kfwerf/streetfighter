var objGulp = require('gulp'),
objGulpCoffee = require('gulp-coffee'),
objGulpSass = require('gulp-sass'),
objGulpUtil = require('gulp-util'),
objGulpWatch = require('gulp-watch'),

objBuilds = {
    development: 'app/',
    production: 'dist/'
},

currentBuild = objBuilds.development,

objPaths = {
    coffee: [ currentBuild + 'coffee/*.coffee', currentBuild + 'coffee/**' ],
    sass: [ currentBuild + 'sass/*.sass', currentBuild + 'sass/**'],
    scripts: currentBuild + 'js/',
    images: currentBuild + 'img/**'
};

objGulp.task('default', function(){
   objGulp.run('observe');
});

objGulp.task('coffee', function() {
    objGulp.src( objPaths.coffee )
        .pipe( objGulpCoffee({bare: true}).on('error', objGulpUtil.log) )
        .pipe( objGulp.dest(objPaths.scripts) )
});

objGulp.task('observe', function() {
    objGulp.watch(objPaths.coffee, function(event) {
        console.log('found changing in: ', objPaths.coffee, 'to ', objPaths.scripts);
        objGulp.run('coffee');
    });
});
