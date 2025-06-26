#import "ExampleLibTurbo.h"
#import <React/RCTLog.h>

@implementation ExampleLibTurbo
RCT_EXPORT_MODULE()

- (NSNumber *)multiply:(double)a b:(double)b {
    NSNumber *result = @(a * b);

    return result;
}


- (BOOL)compare:(NSNumber *)a b:(NSNumber *)b {
    return [a isEqualToNumber:b];
}


- (void)numberPromise:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject { 
    resolve(@(100));
}


- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeExampleLibTurboSpecJSI>(params);
}

@end
