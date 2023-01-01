import React from 'react'

function Blogs() {
  return (
    <>
        <div class="overflow-x-auto">
  <table
    class="min-w-full divide-y-2 divide-gray-200 text-sm dark:divide-gray-700"
  >
    <thead>
      <tr>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
        >
          Name
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
        >
          Date of Birth
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
        >
          Role
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
        >
          Salary
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
      <tr>
        <td
          class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
        >
          John Doe
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200"
        >
          24/05/1995
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200"
        >
          Web Developer
        </td>
        <td
          class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200"
        >
          $120,000
        </td>
      </tr> 
    </tbody>
  </table>
</div>
    </>
  )
}

export default Blogs