class Foo {

    foo;
    arg1;

    constructor(arg1) {
        // inicializamos nuestro objeto con un valor a arg1
        this.arg1 = arg1;
    }

    get foo() {
        return this.foo;
    }

    set foo(value) {
        this.foo = value;
    }

    static staticMethod() {
        return 'Static method has been called.';
    }

    toString() {
        return 'Public method toString has been called.';
    }
}

let foo = new Foo('Arg1 Value');

// retorna el valor de arg1
foo.arg1; // => 'Arg1 Value'

// corremos el metodo get foo() de la clase que devuelve el valor de foo => undefined
foo.foo;

// corremos el metodo  set foo(value) de la clase que le asigna un valor a foo;
foo.foo = 'Foo Value!';

foo.foo; // => 'Foo Value'

foo.toString(); // => 'Public method toString has been called.'

Foo.staticMethod(); // => 'Static method has been called.'


class Device {
    // Inicializamos nuestro objeto con valores defaults, pero lo hacemos configurable.
    constructor(params = {}) {
        ({
            status: this._status = 'off',
            brand: this._brand = 'ACME',
            firmware: this._firmware = 'unknown'
        } = params);
    }

    start() {
        this._status = 'on';
    }

    // Variables totalmente privadas.
    get status() {
        return this._status;
    }

    get brand() {
        return this._brand;
    }

    get firmware() {
        return this._firmware;
    }
}

class VideoDevice extends Device {
    start(source = '') {
        super.start();

        return 'Rendering source...';
    }
}

class DiskDevice extends Device {
    constructor(params = {}) {
        super({status: 'on'});
    }

    format(size = 0) {
        return 'Formatting device | Firmware: ' + this._firmware;
    }
}

let d1 = new Device;
d1.status; // "off"

let player = new VideoDevice({brand: 'Videodrome'});
player.brand; // "Videodrome"
player.status; // "off"
player.start(); // "Rendering source..."
player.status; // "on"

let hdd = new DiskDevice;
hdd.status; // "on"
hdd.format(); // "Formatting device | Firmware: unknown"
