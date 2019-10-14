const assert = require("assert");
const PromoCode = require("../app/models/promoCodes.model");

const newPromoCode = new PromoCode({
    promoCodeString: "TestString"
});

describe("Unit tests for PromoCode Model", function() {

    it("Should add a promo code to the database", function(done){
        PromoCode.deleteMany({promoCodeString: "TestString"})
        newPromoCode.save()
                .then(() => {
                    assert(!newPromoCode.isNew);
                    done();
                });
    });

    it("Should read a promo code from the database", function(done){
        PromoCode.deleteMany({promoCodeString: "TestString"})
        newPromoCode.save();
        PromoCode.findOne({ promoCodeString: "TestString"})
            .then((promo) => {
                assert(promo.promoCodeString ==="TestString");
                done();
            });
    });

    it("Should delete promo codes from the database", function(done){
        PromoCode.deleteMany({promoCodeString: "TestString"})
            .then(() => PromoCode.countDocuments({promoCodeString: "TestString"}))
            .then((promo) => {
                assert(promo == 0);
                done();
            })
    });
});