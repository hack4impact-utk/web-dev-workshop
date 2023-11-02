// api call

interface pokeProps  {
  name: string;
}

export default function Pokemon(props: pokeProps) {
  return (<>
    <li>
      {props.name}
    </li>
  </>);
}