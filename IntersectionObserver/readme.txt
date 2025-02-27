Intersection Observer API の使い方
Intersection Observer API は次の手順で使います。

callback と options を設定する
IntersectionObserver コンストラクターに callback と options を渡して IntersectionObserver オブジェクトを作る
作ったオブジェクトの observe メソッドに監視したい要素を渡す
callback
監視する要素のリストを引数に持つ関数です。各要素は isIntersecting というプロパティを持っていて、このプロパティは options で指定された条件が満たされているときは true に、それ以外の場合は false になります。
上のサンプルの場合は監視している要素は赤い四角形（observedElement）だけなので、callback の引数は [observedElement] になっています。

次のように IntersectionObserver オブジェクトに監視する要素を2つ渡した場合は、callback の引数は [observedElement1, observedElement2] になります。

observer.observe(observedElement1);
observer.observe(observedElement2);

options
callback が呼ばれるタイミングを制御するためのオブジェクトで次の3つのプロパティを持っています。

root
監視している要素がどのくらい見えているかを計算するためのビューポートとして使う要素です。
指定されなかった場合または null の場合はブラウザのビューポートになります。
上のサンプルでは null を指定したので、赤い四角形がブラウザのビューポート内にどれくらい見えているかを監視していたことになります。

rootMargin
root の周りのマージンです。CSS の margin と同じように "10px 20px 30px 40px" （上、右、下、左）という具合に指定します。px ではなく % でも指定できます。デフォルト値は "0px 0px 0px 0px" です。
例えば、 "0px 0px 500px 0px" とした場合、root が下に 500px 拡大されます。root がブラウザのビューポートだった場合、ビューポートの下 500px の領域にある要素も見えていると判定されます。

threshold
監視している要素がどのくらい見えたときにコールバックを呼ぶか指定する値です。
0 以上 1 以下の単一の数値または 0 以上 1 以下の数値の配列です。

1 を指定した場合は監視している要素の 100% が見えたとき、0.5 を指定した場合は 50% が見えたとき、0 を指定した場合は監視している要素が 1px でも見えたらコールバックを呼びます。[0, 0.25, 0.5, 0.75, 1] を指定した場合は、見える割合が 25% を超える度にコールバックが呼ばれます。デフォルト値は 0 です。

Intersection Observer API で一番難しいのはこの callback と options の使い方だと思います。使い方は説明しましたがこれだけを読んで理解するのはなかなか難しいと思うので、サンプルのソースコードを編集して挙動がどう変わるかぜひ見てみてください。

