describe('spotify service', function () {
  
  	var $httpBackend;
  
  	// FROM https://api.spotify.com/v1/search?q=Hillsong&type=album,artist&limit=10&offset=0
  	var jsonData = {"albums":{"href":"https://api.spotify.com/v1/search?query=Hillsong&type=album&offset=0&limit=10","items":[{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3SgHzT552wy2W8pNLaLk24"},"href":"https://api.spotify.com/v1/artists/3SgHzT552wy2W8pNLaLk24","id":"3SgHzT552wy2W8pNLaLk24","name":"Hillsong Worship","type":"artist","uri":"spotify:artist:3SgHzT552wy2W8pNLaLk24"}],"available_markets":["CA","US"],"external_urls":{"spotify":"https://open.spotify.com/album/5SuiUBJmzzlOZqj3rogcja"},"href":"https://api.spotify.com/v1/albums/5SuiUBJmzzlOZqj3rogcja","id":"5SuiUBJmzzlOZqj3rogcja","images":[{"height":640,"url":"https://i.scdn.co/image/67006255527ff16ef547c2c34a0ff368aabaadab","width":640},{"height":300,"url":"https://i.scdn.co/image/c94da558e6a15d0d1b41b72e960979f137e2bceb","width":300},{"height":64,"url":"https://i.scdn.co/image/db302c81794d5f652bdfa3e933ddcedbd4ed0811","width":64}],"name":"Let There Be Light (Deluxe)","type":"album","uri":"spotify:album:5SuiUBJmzzlOZqj3rogcja"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3SgHzT552wy2W8pNLaLk24"},"href":"https://api.spotify.com/v1/artists/3SgHzT552wy2W8pNLaLk24","id":"3SgHzT552wy2W8pNLaLk24","name":"Hillsong Worship","type":"artist","uri":"spotify:artist:3SgHzT552wy2W8pNLaLk24"}],"available_markets":["CA","US"],"external_urls":{"spotify":"https://open.spotify.com/album/1Rxx6OWDCfOwlyWLtNEUGw"},"href":"https://api.spotify.com/v1/albums/1Rxx6OWDCfOwlyWLtNEUGw","id":"1Rxx6OWDCfOwlyWLtNEUGw","images":[{"height":640,"url":"https://i.scdn.co/image/f872ddde435a1782d120c3954575d85e4ca3f6af","width":640},{"height":300,"url":"https://i.scdn.co/image/e0f8069589085fc8621b781ceb6a30a2e0f239d4","width":300},{"height":64,"url":"https://i.scdn.co/image/b8fc5ba323934754264208ef63ce22f425e565a2","width":64}],"name":"OPEN HEAVEN / River Wild (Deluxe/Live)","type":"album","uri":"spotify:album:1Rxx6OWDCfOwlyWLtNEUGw"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3SgHzT552wy2W8pNLaLk24"},"href":"https://api.spotify.com/v1/artists/3SgHzT552wy2W8pNLaLk24","id":"3SgHzT552wy2W8pNLaLk24","name":"Hillsong Worship","type":"artist","uri":"spotify:artist:3SgHzT552wy2W8pNLaLk24"}],"available_markets":["CA","US"],"external_urls":{"spotify":"https://open.spotify.com/album/2eWEMqzTy0UbJzzdHel5qP"},"href":"https://api.spotify.com/v1/albums/2eWEMqzTy0UbJzzdHel5qP","id":"2eWEMqzTy0UbJzzdHel5qP","images":[{"height":640,"url":"https://i.scdn.co/image/17593d228f8803fb2995671f4b6c6a2ec8fbd3e9","width":640},{"height":300,"url":"https://i.scdn.co/image/cdd1deddec19bbbbc2e375dcd030a53edf1d4e00","width":300},{"height":64,"url":"https://i.scdn.co/image/51cda0e67c431d69af204eea252004eabf9beaaf","width":64}],"name":"No Other Name (Deluxe Edition/Live)","type":"album","uri":"spotify:album:2eWEMqzTy0UbJzzdHel5qP"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/74cb3MG0x0BOnYNW1uXYnM"},"href":"https://api.spotify.com/v1/artists/74cb3MG0x0BOnYNW1uXYnM","id":"74cb3MG0x0BOnYNW1uXYnM","name":"Hillsong United","type":"artist","uri":"spotify:artist:74cb3MG0x0BOnYNW1uXYnM"}],"available_markets":["CA","US"],"external_urls":{"spotify":"https://open.spotify.com/album/3UE6nEjBDG16jE3DvSyioz"},"href":"https://api.spotify.com/v1/albums/3UE6nEjBDG16jE3DvSyioz","id":"3UE6nEjBDG16jE3DvSyioz","images":[{"height":640,"url":"https://i.scdn.co/image/c3fddc3f09753cbf8499db694f42c441bd13eb2f","width":640},{"height":300,"url":"https://i.scdn.co/image/1816bd6d2e6731dff2ee2ad9150f23dc1762e862","width":300},{"height":64,"url":"https://i.scdn.co/image/45a864bd33c7d9ce5a518e0505da91b7eb545e3b","width":64}],"name":"Of Dirt And Grace (Live From The Land)","type":"album","uri":"spotify:album:3UE6nEjBDG16jE3DvSyioz"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/74cb3MG0x0BOnYNW1uXYnM"},"href":"https://api.spotify.com/v1/artists/74cb3MG0x0BOnYNW1uXYnM","id":"74cb3MG0x0BOnYNW1uXYnM","name":"Hillsong United","type":"artist","uri":"spotify:artist:74cb3MG0x0BOnYNW1uXYnM"}],"available_markets":["CA","US"],"external_urls":{"spotify":"https://open.spotify.com/album/3A24aBx6jZCAgovIbZUubC"},"href":"https://api.spotify.com/v1/albums/3A24aBx6jZCAgovIbZUubC","id":"3A24aBx6jZCAgovIbZUubC","images":[{"height":640,"url":"https://i.scdn.co/image/b29fe2eb56729aabd9dbdc7df830ee73721529e4","width":640},{"height":300,"url":"https://i.scdn.co/image/5790d4b62ae236a25993a44c788ed08ce7d2084f","width":300},{"height":64,"url":"https://i.scdn.co/image/f29e6877b4bcfae01649857e4302e4c07f08c45b","width":64}],"name":"Zion (Deluxe Edition)","type":"album","uri":"spotify:album:3A24aBx6jZCAgovIbZUubC"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7m4gF38CPATtHrk5HS42WZ"},"href":"https://api.spotify.com/v1/artists/7m4gF38CPATtHrk5HS42WZ","id":"7m4gF38CPATtHrk5HS42WZ","name":"Hillsong Young & Free","type":"artist","uri":"spotify:artist:7m4gF38CPATtHrk5HS42WZ"}],"available_markets":["CA","US"],"external_urls":{"spotify":"https://open.spotify.com/album/54arQETTizZk2Tua6kDdoT"},"href":"https://api.spotify.com/v1/albums/54arQETTizZk2Tua6kDdoT","id":"54arQETTizZk2Tua6kDdoT","images":[{"height":640,"url":"https://i.scdn.co/image/3644c9c6d20ded0beabfbacbfa5be3512828dfdf","width":640},{"height":300,"url":"https://i.scdn.co/image/7a103d4ec50988d337965656d5e104df5e936a45","width":300},{"height":64,"url":"https://i.scdn.co/image/e79995b3746f24ed32d65f9b014c3fdcf7136576","width":64}],"name":"Youth Revival (Live)","type":"album","uri":"spotify:album:54arQETTizZk2Tua6kDdoT"},{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3SgHzT552wy2W8pNLaLk24"},"href":"https://api.spotify.com/v1/artists/3SgHzT552wy2W8pNLaLk24","id":"3SgHzT552wy2W8pNLaLk24","name":"Hillsong Worship","type":"artist","uri":"spotify:artist:3SgHzT552wy2W8pNLaLk24"}],"available_markets":["CA","US"],"external_urls":{"spotify":"https://open.spotify.com/album/7m2VtB9IdKJ0WZmnuSB5Q2"},"href":"https://api.spotify.com/v1/albums/7m2VtB9IdKJ0WZmnuSB5Q2","id":"7m2VtB9IdKJ0WZmnuSB5Q2","images":[{"height":640,"url":"https://i.scdn.co/image/7be7b9ac3aa0d79402c4a54402e152abfa0ad8a7","width":640},{"height":300,"url":"https://i.scdn.co/image/7dfa29158f0275bd9c541ea1b7c0c85880dc98e1","width":300},{"height":64,"url":"https://i.scdn.co/image/4e87de4065d7b90dbcd9e891ce3288091b68bc29","width":64}],"name":"What A Beautiful Name","type":"album","uri":"spotify:album:7m2VtB9IdKJ0WZmnuSB5Q2"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/74cb3MG0x0BOnYNW1uXYnM"},"href":"https://api.spotify.com/v1/artists/74cb3MG0x0BOnYNW1uXYnM","id":"74cb3MG0x0BOnYNW1uXYnM","name":"Hillsong United","type":"artist","uri":"spotify:artist:74cb3MG0x0BOnYNW1uXYnM"}],"available_markets":["CA","US"],"external_urls":{"spotify":"https://open.spotify.com/album/4twr7zT1cX9NP5mk11FKDD"},"href":"https://api.spotify.com/v1/albums/4twr7zT1cX9NP5mk11FKDD","id":"4twr7zT1cX9NP5mk11FKDD","images":[{"height":640,"url":"https://i.scdn.co/image/e6152e590b0afc3fe0e2f723723f03682def94e1","width":640},{"height":300,"url":"https://i.scdn.co/image/0ca9c2a1183ef823aade304f5ca4f91c8a716f2a","width":300},{"height":64,"url":"https://i.scdn.co/image/bbfeeb4b0361afd5ab4a424334c2d36a81ed19e0","width":64}],"name":"Empires","type":"album","uri":"spotify:album:4twr7zT1cX9NP5mk11FKDD"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/7m4gF38CPATtHrk5HS42WZ"},"href":"https://api.spotify.com/v1/artists/7m4gF38CPATtHrk5HS42WZ","id":"7m4gF38CPATtHrk5HS42WZ","name":"Hillsong Young & Free","type":"artist","uri":"spotify:artist:7m4gF38CPATtHrk5HS42WZ"}],"available_markets":["CA","US"],"external_urls":{"spotify":"https://open.spotify.com/album/56sO1QJK2c0grjvU7hzie3"},"href":"https://api.spotify.com/v1/albums/56sO1QJK2c0grjvU7hzie3","id":"56sO1QJK2c0grjvU7hzie3","images":[{"height":640,"url":"https://i.scdn.co/image/3aab59aa7e039ba10547f29b983317ed38b53ca3","width":640},{"height":300,"url":"https://i.scdn.co/image/1ae44282ac7f0069d6340506688f37314a896e98","width":300},{"height":64,"url":"https://i.scdn.co/image/0fd6f86ba992a7121cce958a7893d09431710b68","width":64}],"name":"We Are Young & Free (Live)","type":"album","uri":"spotify:album:56sO1QJK2c0grjvU7hzie3"},{"album_type":"album","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3SgHzT552wy2W8pNLaLk24"},"href":"https://api.spotify.com/v1/artists/3SgHzT552wy2W8pNLaLk24","id":"3SgHzT552wy2W8pNLaLk24","name":"Hillsong Worship","type":"artist","uri":"spotify:artist:3SgHzT552wy2W8pNLaLk24"}],"available_markets":["CA","US"],"external_urls":{"spotify":"https://open.spotify.com/album/7xLjYHAsg4pe76OLFWGFks"},"href":"https://api.spotify.com/v1/albums/7xLjYHAsg4pe76OLFWGFks","id":"7xLjYHAsg4pe76OLFWGFks","images":[{"height":640,"url":"https://i.scdn.co/image/98614be04d4bfbc85f7a4ebeb2860c8461a2442a","width":640},{"height":300,"url":"https://i.scdn.co/image/b826ab99764875f283ccbb1652246284158145be","width":300},{"height":64,"url":"https://i.scdn.co/image/0ef697f00ce390d1191c17a5d62ede9a9c3eeb73","width":64}],"name":"Glorious Ruins (Live)","type":"album","uri":"spotify:album:7xLjYHAsg4pe76OLFWGFks"}],"limit":10,"next":"https://api.spotify.com/v1/search?query=Hillsong&type=album&offset=10&limit=10","offset":0,"previous":null,"total":196},"artists":{"href":"https://api.spotify.com/v1/search?query=Hillsong&type=artist&offset=0&limit=10","items":[{"external_urls":{"spotify":"https://open.spotify.com/artist/3SgHzT552wy2W8pNLaLk24"},"followers":{"href":null,"total":506055},"genres":["christian christmas","world worship","worship"],"href":"https://api.spotify.com/v1/artists/3SgHzT552wy2W8pNLaLk24","id":"3SgHzT552wy2W8pNLaLk24","images":[{"height":640,"url":"https://i.scdn.co/image/f1396f381a0094f61c42430f083f9dad812aacdf","width":640},{"height":320,"url":"https://i.scdn.co/image/d78d0a3896d3e7d081c16468759e9a573ccd787f","width":320},{"height":160,"url":"https://i.scdn.co/image/f9c73d245fdf4df35a9aa16b01cb6a9a3f6cefd0","width":160}],"name":"Hillsong Worship","popularity":73,"type":"artist","uri":"spotify:artist:3SgHzT552wy2W8pNLaLk24"},{"external_urls":{"spotify":"https://open.spotify.com/artist/74cb3MG0x0BOnYNW1uXYnM"},"followers":{"href":null,"total":1037282},"genres":["ccm","christian alternative rock","christian christmas","christian music","worship"],"href":"https://api.spotify.com/v1/artists/74cb3MG0x0BOnYNW1uXYnM","id":"74cb3MG0x0BOnYNW1uXYnM","images":[{"height":1000,"url":"https://i.scdn.co/image/297350f59c30b66029da1e073d4389e66e2cd584","width":1000},{"height":640,"url":"https://i.scdn.co/image/78f3eb5f82262220b920f1371399319eec7beb1e","width":640},{"height":200,"url":"https://i.scdn.co/image/6d8d2c32f3574189f79ec86d8ae7faea9cea8b3d","width":200},{"height":64,"url":"https://i.scdn.co/image/c2cbc228aca999978dee30c7d19f2e3f48a0a658","width":64}],"name":"Hillsong United","popularity":73,"type":"artist","uri":"spotify:artist:74cb3MG0x0BOnYNW1uXYnM"},{"external_urls":{"spotify":"https://open.spotify.com/artist/7m4gF38CPATtHrk5HS42WZ"},"followers":{"href":null,"total":304684},"genres":["anthem worship","ccm","christian alternative rock","christian music","christian rock","worship"],"href":"https://api.spotify.com/v1/artists/7m4gF38CPATtHrk5HS42WZ","id":"7m4gF38CPATtHrk5HS42WZ","images":[{"height":640,"url":"https://i.scdn.co/image/16d10aaacf78a108166f84da3af768b825e809cb","width":640},{"height":320,"url":"https://i.scdn.co/image/529972a5af28f54369e5eb2d3715d2d32f672e9d","width":320},{"height":160,"url":"https://i.scdn.co/image/13ecb3923006c3f5a3e445ad7f55aa3d3c622422","width":160}],"name":"Hillsong Young & Free","popularity":68,"type":"artist","uri":"spotify:artist:7m4gF38CPATtHrk5HS42WZ"},{"external_urls":{"spotify":"https://open.spotify.com/artist/3kb5Da0lPehCHCE5SVLNQk"},"followers":{"href":null,"total":42169},"genres":["alternative ccm","anthem worship","ccm","christian music","christian uplift","deep ccm","worship"],"href":"https://api.spotify.com/v1/artists/3kb5Da0lPehCHCE5SVLNQk","id":"3kb5Da0lPehCHCE5SVLNQk","images":[{"height":667,"url":"https://i.scdn.co/image/c565eaa6b9b833bbaec5cdcf06aaad9a5ec50655","width":1000},{"height":427,"url":"https://i.scdn.co/image/5f06746d12cabc4e17a73bb416e6afcc3a0ece14","width":640},{"height":133,"url":"https://i.scdn.co/image/84efbe1edf213e485f15c4189de6d12370f025db","width":200},{"height":43,"url":"https://i.scdn.co/image/e65e893199e04e1bc2f60bc3aca5c5a2daa8e2a4","width":64}],"name":"Hillsong Chapel","popularity":48,"type":"artist","uri":"spotify:artist:3kb5Da0lPehCHCE5SVLNQk"},{"external_urls":{"spotify":"https://open.spotify.com/artist/6B9zcemB6pCVlbLac9pwWF"},"followers":{"href":null,"total":15764},"genres":["ccm","christian alternative rock","christian music","world worship","worship"],"href":"https://api.spotify.com/v1/artists/6B9zcemB6pCVlbLac9pwWF","id":"6B9zcemB6pCVlbLac9pwWF","images":[{"height":640,"url":"https://i.scdn.co/image/28cbfd0d2913f3d7d78439e45efba30ac109aed6","width":640},{"height":300,"url":"https://i.scdn.co/image/38fed3ee6dae9f2365607fcabf019b0fba658090","width":300},{"height":64,"url":"https://i.scdn.co/image/facec6f3771b550cd274402e62a3cd1389d3e18d","width":64}],"name":"Hillsong Kids","popularity":49,"type":"artist","uri":"spotify:artist:6B9zcemB6pCVlbLac9pwWF"},{"external_urls":{"spotify":"https://open.spotify.com/artist/3phVKYqeq84Ai91CHTQfNq"},"followers":{"href":null,"total":67902},"genres":["latin christian"],"href":"https://api.spotify.com/v1/artists/3phVKYqeq84Ai91CHTQfNq","id":"3phVKYqeq84Ai91CHTQfNq","images":[{"height":640,"url":"https://i.scdn.co/image/15dc1e691bd8ef3aa80fdd14f183d4bb74179cd5","width":640},{"height":300,"url":"https://i.scdn.co/image/e5dd351a8990ca8bc9ffc608cfe9c92ebd5af31e","width":300},{"height":64,"url":"https://i.scdn.co/image/89e0a5b678ddb30caf0630ef7d0218935d7a86b6","width":64}],"name":"Hillsong en Español","popularity":60,"type":"artist","uri":"spotify:artist:3phVKYqeq84Ai91CHTQfNq"},{"external_urls":{"spotify":"https://open.spotify.com/artist/15QEMU8TfJ3jEJjV5dRfCi"},"followers":{"href":null,"total":9994},"genres":[],"href":"https://api.spotify.com/v1/artists/15QEMU8TfJ3jEJjV5dRfCi","id":"15QEMU8TfJ3jEJjV5dRfCi","images":[{"height":640,"url":"https://i.scdn.co/image/92e345647ca0486d3194754ecd132825202cfa06","width":640},{"height":300,"url":"https://i.scdn.co/image/f85008b9cf22772dfb1a00c0f749d2ddd88a24aa","width":300},{"height":64,"url":"https://i.scdn.co/image/00924898467241801a1c91c6041c64b5dc2a2425","width":64}],"name":"Hillsong Global Project","popularity":35,"type":"artist","uri":"spotify:artist:15QEMU8TfJ3jEJjV5dRfCi"},{"external_urls":{"spotify":"https://open.spotify.com/artist/52sbcgIJGMRPxH6owB5Ny4"},"followers":{"href":null,"total":9658},"genres":["alternative ccm","ccm","christian alternative rock","christian music","worship"],"href":"https://api.spotify.com/v1/artists/52sbcgIJGMRPxH6owB5Ny4","id":"52sbcgIJGMRPxH6owB5Ny4","images":[{"height":635,"url":"https://i.scdn.co/image/47806bc2321ff1bdbefc01d0e38d815cad62031f","width":640},{"height":297,"url":"https://i.scdn.co/image/c38a0e6727247385dc44ae8f5125da616881198d","width":300},{"height":63,"url":"https://i.scdn.co/image/c4283c4ee715587272fe2370dcfb8bd72fbbb3a0","width":64}],"name":"Hillsong London","popularity":25,"type":"artist","uri":"spotify:artist:52sbcgIJGMRPxH6owB5Ny4"},{"external_urls":{"spotify":"https://open.spotify.com/artist/6WWkRKCjBIQQ3YMID1LjNu"},"followers":{"href":null,"total":34},"genres":[],"href":"https://api.spotify.com/v1/artists/6WWkRKCjBIQQ3YMID1LjNu","id":"6WWkRKCjBIQQ3YMID1LjNu","images":[],"name":"Melodie Wagner of Hillsong Young & Free","popularity":27,"type":"artist","uri":"spotify:artist:6WWkRKCjBIQQ3YMID1LjNu"},{"external_urls":{"spotify":"https://open.spotify.com/artist/342loa2Mf6nH2pUf1JVQMq"},"followers":{"href":null,"total":113},"genres":[],"href":"https://api.spotify.com/v1/artists/342loa2Mf6nH2pUf1JVQMq","id":"342loa2Mf6nH2pUf1JVQMq","images":[{"height":640,"url":"https://i.scdn.co/image/75c9fe6f355abf9cfade1ed76109f44641347dfd","width":640},{"height":300,"url":"https://i.scdn.co/image/39996451555af015545548522f9290a42b31673a","width":300},{"height":64,"url":"https://i.scdn.co/image/f02ff342434b28bff9699b3094c3d1c5dd12c03e","width":64}],"name":"Hillsong Choir","popularity":21,"type":"artist","uri":"spotify:artist:342loa2Mf6nH2pUf1JVQMq"}],"limit":10,"next":"https://api.spotify.com/v1/search?query=Hillsong&type=artist&offset=10&limit=10","offset":0,"previous":null,"total":17}}
	
	it('should return search album data', function() {

	angular.mock.module('spotify');
		
    angular.mock.inject(function(_spotifyApi_, _$httpBackend_) { 
	  spotifyApi = _spotifyApi_; 
      $httpBackend = _$httpBackend_;
	});

    $httpBackend.when('GET', 'https://api.spotify.com/v1/search?q=hillsong&type=album,artist&limit=10&offset=0')
    .respond(200, jsonData);

    var response;

    spotifyApi.search("hillsong").then(function(data) {
      response = data;
    });

    $httpBackend.flush();

    expect(response).toEqual(jsonData); 

	});
});