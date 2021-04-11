//
//  Hello.swift
//  basicrn
//
//  Created by Rose Neezar on 11/04/2021.
//

import Foundation
import UIKit

@objc(Hello)

class Hello: NSObject, RCTBridgeModule {
  static func moduleName() -> String!{
      return "Hello ";
    }
    
    static func requiresMainQueueSetup () -> Bool {
      return true;
    }
    
    
    @objc
    func ShowMessage(_ message:NSString, duration:Double) -> Void {
      let alert = UIAlertController(title:nil, message: message as String, preferredStyle: .alert);
      let seconds:Double = duration;
      alert.view.backgroundColor = .black
      alert.view.alpha = 0.5
      alert.view.layer.cornerRadius = 14
      
      DispatchQueue.main.async {
        if let delegate = (UIApplication.shared.delegate as? AppDelegate) {
          delegate.window!.rootViewController!.present(alert, animated: true, completion: nil);
        }
      }
      
      DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + seconds, execute: {
        alert.dismiss(animated: true, completion: nil);
      })
    }
}
