'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style
 */

let SignInUpStyle = styled.div(() => `
  height: 100vh;
  background-color: #F8F9FC !important;

  button {
    font-size: 1.5rem !important;
  }

  .text-primary {
    color: #007bff !important;
  }

  .text-danger {
    color: #dc3545 !important;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: pointer;
  }

  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  .btn-primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }

  .btn-primary:not(:disabled):not(.disabled).active,
  .btn-primary:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: #0062cc;
    border-color: #005cbf;
  }

  .btn-primary.focus, .btn-primary:focus {
    box-shadow: 0 0 0 0.2rem rgba(38,143,255,.5);
  }

  .btn.focus, .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  .btn-block {
    display: block;
    width: 100%;
  }

  .text-center {
    text-align: center !important;
  }

  .mt-4 {
    margin-top: 1.5rem !important;
  }

  .mb-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-10 {
    margin-bottom: 5rem !important;
  }
`)

/**
 * Export style
 */

module.exports = SignInUpStyle