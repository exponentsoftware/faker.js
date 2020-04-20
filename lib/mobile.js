/**
 *  *
 *   * @namespace faker.mobile
 *    */
var Mobile = function (faker) {
	  var self = this;
	  var fake = faker.fake;

	  /**
	   *    * mobile
	   *       *
	   *          * @method faker.mobile.mobile
	   *             */
	  self.mobile = function () {
		      return fake('{{mobile.mamufacturer}} {{mobile.model}}');
		    };

	  self.mobile.schema = {
		      "description": "Generates a random mobile.",
		      "sampleResults": ["Samsung S5", "Moto G5", "Iphone 6"]
		    };

	  /**
	   *    * manufacturer
	   *       *
	   *          * @method faker.mobile.manufacturer
	   *             */
	  self.manufacturer = function () {
		      return faker.random.arrayElement(faker.definitions.mobile.manufacturer);
		    };

	  self.manufacturer.schema = {
		      "description": "Generates a manufacturer name.",
		      "sampleResults": ["Samsung", "Motorolla", "Apple"]
		    };


	  /**
	   *    * model
	   *       *
	   *          * @method faker.mobile.model
	   *             */
	  self.model = function () {
		      return faker.random.arrayElement(faker.definitions.mobile.model);
		    };

	  self.model.schema = {
		      "description": "Generates a mobile model.",
		      "sampleResults": ["S5", "G5", "6"]
		    };

	  /**
	   *    * type
	   *       *
	   *          * @method faker.mobile.type
	   *             */
	  self.type = function () {
		      return faker.random.arrayElement(faker.definitions.mobile.type);
		    };

	  self.type.schema = {
		      "description": "Generates a mobile type.",
		      "sampleResults": ["Smartphone", "Feature Phone"]
		    };

	  /**
	   *    * os
	   *       *
	   *          * @method faker.mobile.os
	   *             */
	  self.os = function () {
		      return faker.random.arrayElement(faker.definitions.mobile.os);
		    };

	  self.os.schema = {
		      "description": "Generates a os type.",
		      "sampleResults": ["Android", "iOS", "Windows"]
		    };

	  /**
	   *    * imei
	   *       *
	   *          * @method faker.mobile.imei
	   *             */
	  self.imei = function () {
		      return (
			            faker.random.alphaNumeric(10) +
			            faker.random.alpha({ count: 1, upcase: true }) +
			            faker.random.alphaNumeric(1) +
			            faker.random.number({ min: 10000, max: 100000}) // return five digit #
			          ).toUpperCase();
		    };

	  self.imei.schema = {
		      "description": "Generates a valid IMEI number.",
		      "sampleResults": ["YV1MH682762184654", "3C7WRMBJ2EG208836"]
		    };

	  /**
	   *    * color
	   *       *
	   *          * @method faker.mobile.color
	   *             */
	  self.color = function () {
		      return fake('{{commerce.color}}');
		    };

	  self.color.schema = {
		      "description": "Generates a color",
		      "sampleResults": ["red", "white", "black"]
		    };
};

module["exports"] = Vehicle;


