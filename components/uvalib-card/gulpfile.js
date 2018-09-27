var gulp = require('gulp');
var runSequence = require('run-sequence');
var access = require('gulp-accessibility');
var rename = require("gulp-rename");

// Test the web component accessibility by writing a report
gulp.task('accessibility-report', function() {
  return gulp.src('./demo/hours.html')
    .pipe(access({
      force: true,
      verbose: false,
      ignore: [
        'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.2',
        'WCAG2A.Principle1.Guideline1_3.1_3_1_A.G141'
      ],
      options: {
          accessibilityLevel: 'WCAG2AA',
          reportLocation: 'accessibility-reports',
          reportLevels: {
              notice: true,
              warning: true,
              error: true
          }
      }
    }))
    .pipe(access.report({reportType: 'txt'}))
    .pipe(rename({
      extname: '.txt'
    }))
    .pipe(gulp.dest('reports/txt'));
});

// Test the web component accessibility via console output for automated processes.
gulp.task('accessibility', function() {
  return gulp.src('./demo/hours.html')
    .pipe(access({
      force: true,
      verbose: true,
      ignore: [
        'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.2',
        'WCAG2A.Principle1.Guideline1_3.1_3_1_A.G141'
      ],
      options: {
          accessibilityLevel: 'WCAG2AA',
          reportLevels: {
              error: true
          }
      }
    }))
    .on('error', console.log);
});

// Default task.
gulp.task('default', () =>
  runSequence(
    'accessibility-report'
  )
);
