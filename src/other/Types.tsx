import { ObjectKeys } from "react-hook-form/dist/types/path/common";

interface Post<T = string> {
  id: T;
  title: Capitalize<string>;
  text: string;
  imageUrl?: string;
}

type PostKeys = ObjectKeys<Post<string>>;

interface IdentityGetter<Type> {
  getIdentity(): Type;
}

export class IdentityClass<T> implements IdentityGetter<T> {
  constructor(private readonly value: T) {
    this.value = value;
  }

  getIdentity(): T {
    return this.value;
  }
}

const Types = () => {
  const posts: Omit<Post<number>, "imageUrl">[] = [
    {
      id: 123,
      title: "Asd",
      text: "1",
    },
  ];

  const imagePost: Required<Post>[] = [
    {
      id: "postone_image",
      title: "1i",
      text: "1i",
      imageUrl:
        "https://media.discordapp.net/attachments/1142598682412322836/1144980371738460262/doc_2023-08-26_15-48-56_1.gif?ex=65e32391&is=65d0ae91&hm=b591acecd6f424247e7fcef654a398558a01b176efb42e492cdce6d103810992&",
    },
  ];

  const titleKey: PostKeys = "title";
  const textKey: PostKeys = "text";

  function identity<T>(arg: T): T {
    console.log(arg, typeof arg);
    return arg;
  }

  identity("asd");

  interface Lengthwise {
    length: number;
  }

  function getLength<T extends Lengthwise>(arg: T): number {
    console.log(arg.length);
    return arg.length;
  }

  getLength("123");

  function getPropertyValue<Obj, Key extends keyof Obj>(
    obj: Obj,
    key: Key
  ): Obj[Key] {
    return obj[key];
  }

  console.log(getPropertyValue(posts[0], "title"));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type PostType = (typeof posts)[0];

  class Account {}
  class PremiumAccount extends Account {}
  class Currency {}

  const account = new Account();
  const premiumAccount = new PremiumAccount();
  const currency = new Currency();

  console.log(account instanceof Account);
  console.log(account instanceof PremiumAccount);
  console.log(premiumAccount instanceof Account);
  console.log(premiumAccount instanceof PremiumAccount);
  console.log(currency instanceof Account);

  
  return (
    <div>
      <div>
        <div>
          keys: {titleKey}, {textKey}
        </div>
        <div className="my-2 w-[100%] h-[2px] bg-black"></div>
        {posts.map((item) => (
          <div key={item.id}>
            {item.title}: {item.text}
          </div>
        ))}
        <div className="my-2 w-[100%] h-[2px] bg-black"></div>
        {imagePost.map((item) => (
          <div key={item.id}>
            {item.title}: {item.text}
            <img
              className="w-[100px] h-[100px] object-cover"
              src={item.imageUrl}
              alt=""
            />
          </div>
        ))}
        <div className="my-2 w-[100%] h-[2px] bg-black"></div>
      </div>
    </div>
  );
};

export default Types;
