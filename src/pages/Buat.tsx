import React, { useCallback, useState } from "react";

function Buat() {
  const [CountKuiz, setCountKuiz] = useState<number>(1);

  return (
    <>
      <h1 className='text-2xl font-bold tracking-wide my-8'>Buat Kuis!</h1>
      <div className='overflow-auto' style={{ maxHeight: "65vh" }}>
        <form
          className='flex flex-col gap-4'
          onSubmit={(e) => e.preventDefault()}
        >
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='font-bold'>
              Judul
            </label>
            <input
              type='text'
              className='border border-purple-700 p-2 rounded-md'
              placeholder=''
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='font-bold'>
              Deskripsi
            </label>
            <textarea
              name=''
              id=''
              cols={30}
              rows={5}
              className='border border-purple-700 p-2 rounded-md'
            ></textarea>
          </div>
          {[...Array(CountKuiz)].map((v, i) => {
            return (
              <div className='flex flex-col gap-2 p-2 my-2' key={i}>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='' className='font-bold'>
                    Kuis No. {i + 1}
                  </label>
                  <input
                    type='text'
                    className='border border-purple-700 p-2 rounded-md'
                    placeholder=''
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='' className='font-bold'>
                    Tipe Kuis No. {i + 1}
                  </label>
                  <select name="" id="" className='border border-purple-700 p-2 rounded-md'>
                    <option value="1">Jawaban Singkat</option>
                    <option value="1">Pilihan Ganda</option>
                    <option value="1">Jawaban Berurai</option>
                  </select>
                </div>
              </div>
            );
          })}
        </form>
      </div>
      <div className='flex flex-col gap-2 my-5'>
        <button
          className='border p-2 rounded-md font-bold bg-yellow-400'
          onClick={(e) => {
            setCountKuiz((v) => v + 1);
          }}
        >
          Tambah Kuis
        </button>
      </div>
    </>
  );
}

export default Buat;
