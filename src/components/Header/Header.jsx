export default function Header() {
  return (
    <div>
      <p className='ml-[44%] mt-4 text-3xl font-bold'>Movie Incubateur</p>

      <input
        className='w-96 border-solid border-2 border-stone-700 p-1 ml-[44%] mt-2 mr-4 text-base rounded-md '
        type='text'
        placeholder='Search a movie ...'
      />
    </div>
  );
}
