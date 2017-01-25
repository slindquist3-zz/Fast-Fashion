class ProductsController < ApplicationController

  def index
    @products = Product.all
  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    @product = Product.new
    @product.name = params[:name]
    @product.price = params[:price]
    @product.thumbnail = params[:thumbnail]
    @product.cart_id = params[:cart_id]
    @product.save
  end

end
