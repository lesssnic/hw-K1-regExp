
	let data = "Pellentesque ex eros, +380665433321 porttitor eu bibendum ac, aliquam tincidunt urna. Mauris tristique lobortis orci, nec varius magna convallis interdum. Etiam 5363 4567 8765 3454 pharetra tempor ex, vel eleifend (067) 678 44 21 odio lacinia (0562) 35-30-38 eget. Morbi maximus libero vitae aliquet facilisis. Vivamus 5674-2346-8945-0012 vitae quam nisi. Quisque 12/45 quis venenatis 5192722517688913 lacus. Sed ac lorem (050)567-45-33 nec leo pharetra 4556796335044346 dapibus sed eu +38067432112 ex. In hac 4913-8185-2881-4543  habitasse platea dictumst. In dignissim 5461158320267908 suscipit rutrum. Ut 4916 8494 1754 2904 luctus  sapien in risus 56th street auctor, ac placerat 067-678-44-21  quam malesuada. Pellentesque (056) 7783322 bibendum justo  5363 4567 87653 3455 tempus purus convallis, a viverra nunc ullamcorper. Nulla 5213 9203 2475 5355 eget lectus gravida, porta eros vitae, semper erat +39-926-1234567.  Aenean volutpat vehicula dui ut pharetra.";
	
	let regTemplate = /\d{4}(\D|)\d{4}(\D|)\d{4}(\D|)\d{4}/g;

	let regSplit = /-| |/;

	let bankNumbers = data.match(regTemplate);

	bankNumbers = bankNumbers.map(item => item.split(regSplit));

	let bankNumbersVerif = bankNumbers.filter(cardValidation).map(item => item.reverse().join(''));

	bankNumbersVerif = bankNumbersVerif.map(item => item.split(/(.{4})(.{4})(.{4})(.{4})/).join(' ').trim());

	console.log(bankNumbersVerif);

	render(bankNumbersVerif);

	function cardValidation(cardNumber){
		sumCardNumber = cardNumber.reverse()
                .map(function(item, i){
                    if(i%2==1){
                    item = +item*2;
                    }
                    if (+item >= 10){
                        item = +item - 9;
                    }
                    return +item; 
                }).reduce((sum, item) => sum + item);
		
		if (sumCardNumber%10==0){
			return true;
		}else{ 	
			return false;
				}
	};

	function render(data){
		
		data = data.map(item => `
		<p>${item}</p>
		` ).join('');
		let tag = document.querySelector('body');
		
		tag.innerHTML = data;
	}
	/*
		
	Необходимо выбрать !!валидные!! номера банковских карт и вывести их в формате 4 блока по 4 цифры.
	
	Например:
	
	5475 0330 3843 6453
	4539 1799 4927 2557
	...
	
	*/