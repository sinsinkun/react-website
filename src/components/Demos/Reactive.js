import { useEffect, useState } from 'react';
import { useStoreContext } from '../GlobalStore';

function ReactiveDemo () {

  const [store] = useStoreContext();
  const [width, setWidth] = useState(store.winX/1.5);

  useEffect(() => {
    if (store.winX > 980 ) setWidth(store.winX/1.5);
    else setWidth(store.winX/1.2);
  }, [store.winX])

  return(
    <div className="demo-container" style={{ width:width }}>
      <h4>Reactive layout</h4>
      <p>
        Reactive layout means that the placement of HTML elements on the screen changes
        based on the screensize of the device that is being used to view it. For example,
        the visible portion of the sidebar on this page and the navigation menu above will
        change, depending on whether you are viewing this page on a phone or a desktop PC.
      </p>
      <p>
        ...
      </p>
    </div>
  )
}

export default ReactiveDemo;