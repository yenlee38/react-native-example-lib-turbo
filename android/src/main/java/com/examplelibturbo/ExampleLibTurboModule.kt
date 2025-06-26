package com.examplelibturbo

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.bridge.Promise

@ReactModule(name = ExampleLibTurboModule.NAME)
class ExampleLibTurboModule(reactContext: ReactApplicationContext) :
  NativeExampleLibTurboSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  override fun compare(a: Double, b: Double): Boolean {
    return a > b
  }

  override fun numberPromise(promise: Promise) {
     promise.resolve(100)
  }


  companion object {
    const val NAME = "ExampleLibTurbo"
  }
}
