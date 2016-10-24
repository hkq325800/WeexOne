package com.kerchin.wxhelloworld;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;

/**
 * Created by ucmed on 2016/10/24.
 */

public class HelloApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        //初始化Weex
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageLoader()).build();
        WXSDKEngine.initialize(this, config);
    }
}
