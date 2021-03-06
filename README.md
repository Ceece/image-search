# Image Search Abstraction Layer

## User Story
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

## Example query usage:
```
/api/search/lolcats?offset=10
/api/latest
```

## Example query output:
```
[{
    url: "http://www.psychohistorian.org/img/humour/lolcats/lolcats-001.jpg",
    snippet: "http://www.psychohistorian.org/img/humour/lolcats/lolcats-001.jpg",
    thumbnail: "http://ts2.mm.bing.net/th?id=OIP.Mb73d19319adc88eaa2a4d4c68f9f41fdH0&pid=15.1",
    context: "http://www.glogster.com/pink--icecream/lolcats/g-6le7uo5431irf7bjdm6m4a0"
},{
    url: "http://4.bp.blogspot.com/_b3GHoGMBNpY/TSIoAGmKgrI/AAAAAAAAFGs/krY10VMMlyA/s1600/LOLCats10.png",
    snippet: "there are some lolcats that just do not like being lolcats for example ...",
    thumbnail: "http://ts4.mm.bing.net/th?id=OIP.Med89e883941b69caa5a6c0a3780dfc7bH0&pid=15.1",
    context: "http://funnylolcats.blogspot.com/"
},{
    url: "http://www.dannedelko.com/lolcats-iz-mine-go-way.jpg",
    snippet: "SodaHead.com - Pdizzle (member: 1103739) - 36 - Male - United States",
    thumbnail: "http://ts4.mm.bing.net/th?id=OIP.Mf4d9d73668a921b4b39c5f27c9152bb2o0&pid=15.1",
    context: "http://sodahead.com/user/profile/1103739/pdizzle"
},{
    url: "http://overlypositive.com/wp-content/uploads/2012/06/lolcat.jpg",
    snippet: "Ah, lolcats. You have to love them when they’re shared.",
    thumbnail: "http://ts2.mm.bing.net/th?id=OIP.Mafe87202b585761929f84eb65b6c0585o0&pid=15.1",
    context: "http://overlypositive.com/2012/06/21/online-sharing-is-caring/"
},{
    url: "http://1.bp.blogspot.com/-WiD3qOHgN4A/Ta9-WHrYJAI/AAAAAAAAAK0/QWsz104Dmr0/s1600/lolcats.png",
    snippet: "Blog not found",
    thumbnail: "http://ts1.mm.bing.net/th?id=OIP.Mf7d52d7be72954bdbfc72a1c354dd059H0&pid=15.1",
    context: "http://omgtehmeme.blogspot.com/p/lolcats.html"
},{
    url: "http://images2.fanpop.com/images/photos/7700000/lolcats-anyone-icanhascheezburger-7740235-500-363.jpg",
    snippet: "icanhascheezburger images lolcats anyone? wallpaper and background ...",
    thumbnail: "http://ts2.mm.bing.net/th?id=OIP.Mb76d31ed0c1ac465f0251b72570dc503H0&pid=15.1",
    context: "http://www.fanpop.com/clubs/icanhascheezburger/images/7740235/title/lolcats-anyone-photo"
},{
    url: "http://stwww.bikemag.com/files/2012/05/lolcats2.jpg",
    snippet: "... looking into the ‘cultural phenomena’ of LOLcats . These things",
    thumbnail: "http://ts3.mm.bing.net/th?id=OIP.M02b50de603c52020ffbb037dc1d1a49aH0&pid=15.1",
    context: "http://www.bikemag.com/news/news-of-the-tweet-copycats/"
},{
    url: "http://funnypicture.org/wallpaper/2015/06/lolcats-35-widescreen-wallpaper.jpg",
    snippet: "Lolcats 22 Wide Wallpaper - Funnypicture.org",
    thumbnail: "http://ts3.mm.bing.net/th?id=OIP.Mdca807c4e35d7137c3648d432ef945bbo0&pid=15.1",
    context: "http://funnypicture.org/lolcats-22-wide-wallpaper.html"
},{
    url: "http://iliketowastemytime.com/sites/default/files/funny_cats_lol_cats_sup_bro.jpg",
    snippet: "Funny Compilation of LOL Cats (Part 1) | I Like To Waste My Time",
    thumbnail: "http://ts3.mm.bing.net/th?id=OIP.Mea99eb3ab43ab0313f42440282e275a3H0&pid=15.1",
    context: "http://iliketowastemytime.com/2011/12/21/funny-compilation-of-lol-cats-part-1"
},{
    url: "http://1.bp.blogspot.com/-Hm2EgO-axuE/TrZI10HtkZI/AAAAAAAAArw/5l_jgoT3Mhk/s1600/lolcats-037.jpg",
    snippet: "Pieroblog: Lolcats November 2011 - 2",
    thumbnail: "http://ts1.mm.bing.net/th?id=OIP.Ma47375ea5c3eeff59e1514f2c9b7657fH0&pid=15.1",
    context: "http://pieroblog-citta.blogspot.com/2011/11/lolcats-november-2011-2.html"
}]
```

## Example latest output:
```
[{
    term: "lolcats",
    when: "2016-10-19T06:22:26.260Z"
},{
    term: "lolcats",
    when: "2016-10-19T06:22:02.406Z"
},{
    term: "the pre sequel",
    when: "2016-10-19T03:18:14.257Z"
},{
    term: "borderlans 3",
    when: "2016-10-19T03:17:27.359Z"
},{
    term: "batman becomes joker",
    when: "2016-10-18T10:38:44.696Z"
},{
    term: "batman becomes joker",
    when: "2016-10-18T10:37:39.908Z"
},{
    term: "batman becomes joker",
    when: "2016-10-18T10:36:39.772Z"
}]
```