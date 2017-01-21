class Foo {
    constructor ( ...args ) {
        // super( ...args );
    }

    get foo () {
        return this.foo;
    }

    set foo ( value ) {
        this.foo = value;
    }

    static staticMethod () {
        return 'Static method has been called.';
    }

    toString () {
        return 'Public method toString has been called.';
    }
}

let foo = new Foo()













class Device {
  constructor ( params = {} ) {
    ( {
      status: this._status = 'off',
      brand: this._brand = 'ACME',
      firmware: this._firmware = 'unknown'
    } = params );
  }

  start () {
    this._status = 'on';
  }

  get status () {
    return this._status;
  }

  get brand () {
    return this._brand;
  }

  get firmware () {
    return this._firmware;
  }
}

class VideoDevice extends Device {
  start ( source = '' ) {
    super.start();

    return 'Rendering source...';
  }
}

class DiskDevice extends Device {
  constructor ( params = {} ) {
    super( { status: 'on' } );
  }

  format ( size = 0 ) {
    return 'Formatting device | Firmware: ' + this._firmware;
  }
}

let d1 = new Device;
d1.status; // "off"

let player = new VideoDevice( { brand: 'Videodrome' } );
player.brand; // "Videodrome"
player.status; // "off"
player.start(); // "Rendering source..."
player.status; // "on"

let hdd = new DiskDevice;
hdd.status; // "on"
hdd.format(); // "Formatting device | Firmware: unknown"
