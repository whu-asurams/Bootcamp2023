# The website for Bootcamp2023 at Albany State University

## Folders
1. boys              --- list of boys' activities using Midjourney
2. girls             --- list of girls' activities using Midjourney
3. javascriptFiles   --- javascript files used for creating the webpages
4. registration      --- PHP files for registration
5. styles            --- list of basic style files based on Bootstrap 5
6. week1             --- week 1 activities
7. week2             --- week 2 activities
8. week3             --- week 3 activities
9. week4             --- week 4 activities

## Major webpages
The website is developed based on Bootstrap 5.0. There are five major html files:
1. index.html 
2. week1/week1.html
3. week2/week2.html
4. week3/week3.html
5. week4/week4.html

## Layout of week1.html to week4.html
The layout of each week's html page is pretty much the same. They contains about 100 line of codes. The detailed contents are created using JavaScript to reduce the errors. There are two js files used for each week's html page. For instance, for week 1, the files
  ```
       <script src="../javascriptFiles/createHTMLNode.js">
       </script>
       <script src="./week1.js">
       </script> 
  ```

 The first js file will create HTML nodes defined in the second js file. The second js file is basically a collection of javscript arrays, each of which contains the html code.   

## Registration for the camp

The registration is written in PhP. It is connected directly to a database hosted in my personal website. Changes are required. Input data validation is included for names and email address. Another PhP file is used to view registration without login.

- ./registration/register.php
- ./registration/viewReg.php

## Breakdown of Bootstrap styles

There are separate style files which come from the boostrap 5.0 style files. Each of them is about a particular CSS property. The following list is enough for most webpage development. Animation, transistion and transformation are not covered.

- backgroundColor
- border
- margin and padding
- cards
- carousel
- container
- corner
- cusor
- display
- dropdown
- margin
- navigatin
- navbar
- padding
- position
- row and columns
- shadow
- tab and navigation
- text
- typography
- utilities
- witth and height

For navigation, some javascript is needed, which is included in "navigation.js".




