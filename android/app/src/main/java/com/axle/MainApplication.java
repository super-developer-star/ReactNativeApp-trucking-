package com.axle;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.benwixen.rnfilesystem.RNFileSystemPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.reactlibrary.RNPdfScannerPackage;
import com.mapbox.reactnativemapboxgl.ReactNativeMapboxGLPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.imagepicker.ImagePickerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFileSystemPackage(),
            new RNFetchBlobPackage(),
            new RNPdfScannerPackage(),
            new ReactNativeMapboxGLPackage(),
            new VectorIconsPackage(),
            new ReactNativePushNotificationPackage(),
            new ImagePickerPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
