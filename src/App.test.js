//import calcularTotal from "./App.js";
function calcularTotal(cantidad, precio, estado) {
    if (estado == "UT") {
        impuesto = 0.0665;
    } else {
        if (estado == "NV") {
            impuesto = 0.08;
        } else {
            if (estado == "TX") {
                impuesto = 0.0625;
            } else {
                if (estado == "AL") {
                    impuesto = 0.04;
                } else {
                    if (estado == "CA") {
                        impuesto = 0.0825;
                    } else {
                        impuesto = 0;
                    }
                }
            }
        }
    }
    return cantidad * precio * (1 + impuesto)
}

describe("Resultado debe ser exacto", () => {
    it("deberia ser exacto", () => {
        //expect(cantidad.value >= 0);
        expect(calcularTotal(20, 20, 'UT')).toEqual(426.6);
    });
    it("deberia ser exacto", () => {
        //expect(cantidad.value >= 0);
        expect(calcularTotal(5, 5, 'AL')).toEqual(26);
    });
    it("deberia ser exacto", () => {
        //expect(cantidad.value >= 0);
        expect(calcularTotal(10, 10, 'TX')).toEqual(106.25);
    });
    it("deberia ser exacto", () => {
        //expect(cantidad.value >= 0);
        expect(calcularTotal(20, 2, 'NV')).toEqual(43.2);
    });
    it("deberia ser exacto", () => {
        //expect(cantidad.value >= 0);
        expect(calcularTotal(5, 5, 'CA')).toEqual(27.0625);
    });
});