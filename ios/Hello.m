//
//  Hello.m
//  basicrn
//
//  Created by Rose Neezar on 11/04/2021.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Hello, NSObject)
RCT_EXTERN_METHOD(ShowMessage:(NSString *)message duration:(double *)duration)
@end
