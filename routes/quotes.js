const quotes = [
  {
    "q": "Courage is resistance to fear, mastery of fear - not absence of fear.",
    "a": "Mark Twain",
    "h": "<blockquote>&ldquo;Courage is resistance to fear, mastery of fear - not absence of fear.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>"
  },
  {
    "q": "Life is filled with secrets. You can't learn them all at once.",
    "a": "Dan Brown",
    "h": "<blockquote>&ldquo;Life is filled with secrets. You can't learn them all at once.&rdquo; &mdash; <footer>Dan Brown</footer></blockquote>"
  },
  {
    "q": "The real meditation is how you live your life.",
    "a": "Jon Kabat-Zinn",
    "h": "<blockquote>&ldquo;The real meditation is how you live your life.&rdquo; &mdash; <footer>Jon Kabat-Zinn</footer></blockquote>"
  },
  {
    "q": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. ",
    "a": "Henry Ford",
    "h": "<blockquote>&ldquo;When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. &rdquo; &mdash; <footer>Henry Ford</footer></blockquote>"
  },
  {
    "q": "We ourselves feel that what we are doing is just a drop in the ocean. But the ocean would be less because of that missing drop.",
    "a": "Mother Teresa",
    "h": "<blockquote>&ldquo;We ourselves feel that what we are doing is just a drop in the ocean. But the ocean would be less because of that missing drop.&rdquo; &mdash; <footer>Mother Teresa</footer></blockquote>"
  },
  {
    "q": "The price of inaction is far greater than the cost of making a mistake.",
    "a": "Meister Eckhart",
    "h": "<blockquote>&ldquo;The price of inaction is far greater than the cost of making a mistake.&rdquo; &mdash; <footer>Meister Eckhart</footer></blockquote>"
  },
  {
    "q": "Fear does not have any special power unless you empower it by submitting to it.",
    "a": "Les Brown",
    "h": "<blockquote>&ldquo;Fear does not have any special power unless you empower it by submitting to it.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
  },
  {
    "q": "Words used to attract the dull of wit are not to be relied on.",
    "a": "Huang Po",
    "h": "<blockquote>&ldquo;Words used to attract the dull of wit are not to be relied on.&rdquo; &mdash; <footer>Huang Po</footer></blockquote>"
  },
  {
    "q": "If you pick up a starving dog and make him prosperous he will not bite you. This is the principal difference between a dog and man.",
    "a": "Mark Twain",
    "h": "<blockquote>&ldquo;If you pick up a starving dog and make him prosperous he will not bite you. This is the principal difference between a dog and man.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>"
  },
  {
    "q": "Contemplation often makes life miserable.  We should act more, think less, and stop watching ourselves live.",
    "a": "Nicolas Chamfort",
    "h": "<blockquote>&ldquo;Contemplation often makes life miserable.  We should act more, think less, and stop watching ourselves live.&rdquo; &mdash; <footer>Nicolas Chamfort</footer></blockquote>"
  },
  {
    "q": "You can't wait for inspiration. You have to go after it with a club. ",
    "a": "Jack London",
    "h": "<blockquote>&ldquo;You can't wait for inspiration. You have to go after it with a club. &rdquo; &mdash; <footer>Jack London</footer></blockquote>"
  },
  {
    "q": "Alone we can do so little; together we can do so much.",
    "a": "Helen Keller",
    "h": "<blockquote>&ldquo;Alone we can do so little; together we can do so much.&rdquo; &mdash; <footer>Helen Keller</footer></blockquote>"
  },
  {
    "q": "The eye with which I see God is the same eye with which God sees me.",
    "a": "Meister Eckhart",
    "h": "<blockquote>&ldquo;The eye with which I see God is the same eye with which God sees me.&rdquo; &mdash; <footer>Meister Eckhart</footer></blockquote>"
  },
  {
    "q": "Failure will never overtake me if my determination to succeed is strong enough.",
    "a": "Og Mandino",
    "h": "<blockquote>&ldquo;Failure will never overtake me if my determination to succeed is strong enough.&rdquo; &mdash; <footer>Og Mandino</footer></blockquote>"
  },
  {
    "q": "No kind action ever stops with itself. One kind action leads to another. Good example is followed.",
    "a": "Amelia Earhart",
    "h": "<blockquote>&ldquo;No kind action ever stops with itself. One kind action leads to another. Good example is followed.&rdquo; &mdash; <footer>Amelia Earhart</footer></blockquote>"
  },
  {
    "q": "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough. ",
    "a": "Oprah Winfrey",
    "h": "<blockquote>&ldquo;Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough. &rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"
  },
  {
    "q": "Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.",
    "a": "James Allen",
    "h": "<blockquote>&ldquo;Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.&rdquo; &mdash; <footer>James Allen</footer></blockquote>"
  },
  {
    "q": "I like the dreams of the future better than the history of the past.",
    "a": "Thomas Jefferson",
    "h": "<blockquote>&ldquo;I like the dreams of the future better than the history of the past.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>"
  },
  {
    "q": "The only way round is through.",
    "a": "Robert Frost",
    "h": "<blockquote>&ldquo;The only way round is through.&rdquo; &mdash; <footer>Robert Frost</footer></blockquote>"
  },
  {
    "q": "Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else.",
    "a": "Les Brown",
    "h": "<blockquote>&ldquo;Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
  },
  {
    "q": "Trust thyself: every heart vibrates to that iron string.",
    "a": "Ralph Waldo Emerson",
    "h": "<blockquote>&ldquo;Trust thyself: every heart vibrates to that iron string.&rdquo; &mdash; <footer>Ralph Waldo Emerson</footer></blockquote>"
  },
  {
    "q": "We would accomplish many more things if we did not think of them as impossible.",
    "a": "Vince Lombardi",
    "h": "<blockquote>&ldquo;We would accomplish many more things if we did not think of them as impossible.&rdquo; &mdash; <footer>Vince Lombardi</footer></blockquote>"
  },
  {
    "q": "Knowing others is wisdom, knowing yourself is enlightenment.",
    "a": "Lao Tzu",
    "h": "<blockquote>&ldquo;Knowing others is wisdom, knowing yourself is enlightenment.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
  },
  {
    "q": "In the end, it's not the years in your life that count. It's the life in your years.",
    "a": "Abraham Lincoln",
    "h": "<blockquote>&ldquo;In the end, it's not the years in your life that count. It's the life in your years.&rdquo; &mdash; <footer>Abraham Lincoln</footer></blockquote>"
  },
  {
    "q": "Projecting your mind into a successful situation is the most powerful means to achieve goals.  ",
    "a": "Estee Lauder",
    "h": "<blockquote>&ldquo;Projecting your mind into a successful situation is the most powerful means to achieve goals.  &rdquo; &mdash; <footer>Estee Lauder</footer></blockquote>"
  },
  {
    "q": "Faithless is he that says farewell when the road darkens.",
    "a": "J.R.R. Tolkien",
    "h": "<blockquote>&ldquo;Faithless is he that says farewell when the road darkens.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"
  },
  {
    "q": "Ponder and deliberate before you make a move.",
    "a": "Sun Tzu",
    "h": "<blockquote>&ldquo;Ponder and deliberate before you make a move.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"
  },
  {
    "q": "Yesterday is the past, tomorrow is the future, today is a gift - that's why it's called the present.",
    "a": "George Bernard Shaw",
    "h": "<blockquote>&ldquo;Yesterday is the past, tomorrow is the future, today is a gift - that's why it's called the present.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>"
  },
  {
    "q": "What we call the beginning is often the end. And to make an end is to make a beginning. The end is where we start from.",
    "a": "T.S. Eliot",
    "h": "<blockquote>&ldquo;What we call the beginning is often the end. And to make an end is to make a beginning. The end is where we start from.&rdquo; &mdash; <footer>T.S. Eliot</footer></blockquote>"
  },
  {
    "q": "Today you are you, that is truer than true. There is no one alive who is youer than you.",
    "a": "Dr. Seuss",
    "h": "<blockquote>&ldquo;Today you are you, that is truer than true. There is no one alive who is youer than you.&rdquo; &mdash; <footer>Dr. Seuss</footer></blockquote>"
  },
  {
    "q": "We are born from a quiet sleep, and we die to a calm awakening",
    "a": "Zhuangzi",
    "h": "<blockquote>&ldquo;We are born from a quiet sleep, and we die to a calm awakening&rdquo; &mdash; <footer>Zhuangzi</footer></blockquote>"
  },
  {
    "q": "To know your Enemy, you must become your Enemy.",
    "a": "Sun Tzu",
    "h": "<blockquote>&ldquo;To know your Enemy, you must become your Enemy.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"
  },
  {
    "q": "Outstanding people have one thing in common: an absolute sense of mission.  ",
    "a": "Zig Ziglar",
    "h": "<blockquote>&ldquo;Outstanding people have one thing in common: an absolute sense of mission.  &rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
  },
  {
    "q": "We have to live life with a sense of urgency so not a minute is wasted.",
    "a": "Les Brown",
    "h": "<blockquote>&ldquo;We have to live life with a sense of urgency so not a minute is wasted.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
  },
  {
    "q": "Each problem has a positive side.",
    "a": "Og Mandino",
    "h": "<blockquote>&ldquo;Each problem has a positive side.&rdquo; &mdash; <footer>Og Mandino</footer></blockquote>"
  },
  {
    "q": "Anyone who wants to achieve a dream must stay strong, focused and steady.",
    "a": "Estee Lauder",
    "h": "<blockquote>&ldquo;Anyone who wants to achieve a dream must stay strong, focused and steady.&rdquo; &mdash; <footer>Estee Lauder</footer></blockquote>"
  },
  {
    "q": "If you take responsibility for yourself you will develop a hunger to accomplish your dream.",
    "a": "Les Brown",
    "h": "<blockquote>&ldquo;If you take responsibility for yourself you will develop a hunger to accomplish your dream.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
  },
  {
    "q": "Imagination is everything. It is the preview of life's coming attractions.",
    "a": "Albert Einstein",
    "h": "<blockquote>&ldquo;Imagination is everything. It is the preview of life's coming attractions.&rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>"
  },
  {
    "q": "Why fit in when you were born to stand out?",
    "a": "Dr. Seuss",
    "h": "<blockquote>&ldquo;Why fit in when you were born to stand out?&rdquo; &mdash; <footer>Dr. Seuss</footer></blockquote>"
  },
  {
    "q": "Freedom lies in being bold.",
    "a": "Robert Frost",
    "h": "<blockquote>&ldquo;Freedom lies in being bold.&rdquo; &mdash; <footer>Robert Frost</footer></blockquote>"
  },
  {
    "q": "Leave the beaten track behind occasionally and dive into the woods. Every time you do you will be certain to find something you have never seen before.",
    "a": "Alexander Graham Bell",
    "h": "<blockquote>&ldquo;Leave the beaten track behind occasionally and dive into the woods. Every time you do you will be certain to find something you have never seen before.&rdquo; &mdash; <footer>Alexander Graham Bell</footer></blockquote>"
  },
  {
    "q": "Every traveler has a home of his own, and he learns to appreciate it the more from his wandering.",
    "a": "Charles Dickens",
    "h": "<blockquote>&ldquo;Every traveler has a home of his own, and he learns to appreciate it the more from his wandering.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>"
  },
  {
    "q": "A man who dares to waste one hour of time has not discovered the value of life.",
    "a": "Charles Darwin",
    "h": "<blockquote>&ldquo;A man who dares to waste one hour of time has not discovered the value of life.&rdquo; &mdash; <footer>Charles Darwin</footer></blockquote>"
  },
  {
    "q": "If you go out looking for friends, you're going to find they are very scarce. If you go out to be a friend, you'll find them everywhere.",
    "a": "Zig Ziglar",
    "h": "<blockquote>&ldquo;If you go out looking for friends, you're going to find they are very scarce. If you go out to be a friend, you'll find them everywhere.&rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
  },
  {
    "q": "Amateurs sit and wait for inspiration, the rest of us just get up and got to work.",
    "a": "Stephen King",
    "h": "<blockquote>&ldquo;Amateurs sit and wait for inspiration, the rest of us just get up and got to work.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>"
  },
  {
    "q": "Life can only be understood backwards; but it must be lived forwards.",
    "a": "Soren Kierkegaard",
    "h": "<blockquote>&ldquo;Life can only be understood backwards; but it must be lived forwards.&rdquo; &mdash; <footer>Soren Kierkegaard</footer></blockquote>"
  },
  {
    "q": "Mind is the creator of everything. You should therefore guide it to create only good.",
    "a": "Paramahansa Yogananda",
    "h": "<blockquote>&ldquo;Mind is the creator of everything. You should therefore guide it to create only good.&rdquo; &mdash; <footer>Paramahansa Yogananda</footer></blockquote>"
  },
  {
    "q": "People who say it cannot be done should not interrupt those who are doing it.",
    "a": "George Bernard Shaw",
    "h": "<blockquote>&ldquo;People who say it cannot be done should not interrupt those who are doing it.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>"
  },
  {
    "q": "Don't think money does everything or you are going to end up doing everything for money.",
    "a": "Voltaire",
    "h": "<blockquote>&ldquo;Don't think money does everything or you are going to end up doing everything for money.&rdquo; &mdash; <footer>Voltaire</footer></blockquote>"
  },
  {
    "q": "It is indeed a radical act of love just to sit down and be quiet for a time by yourself.",
    "a": "Jon Kabat-Zinn",
    "h": "<blockquote>&ldquo;It is indeed a radical act of love just to sit down and be quiet for a time by yourself.&rdquo; &mdash; <footer>Jon Kabat-Zinn</footer></blockquote>"
  }
]

module.exports = quotes;
