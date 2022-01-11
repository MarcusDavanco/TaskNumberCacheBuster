class TaskNumberCacheBuster {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'TaskNumberCacheBuster',
      (compilation, callback) => {
        console.log('This is an example plugin!');
        console.log(
          "Here's the `compilation` object which represents a single build of assets:',
          compilation
        );

        compilation.addModule(/* ... */);

        callback();
      }
    );
  }
}
